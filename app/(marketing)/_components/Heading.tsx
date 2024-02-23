"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {

    const {isAuthenticated, isLoading} = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans.   wanna talk in instagram?? <span className="underline">Miro</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Miro is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {
        isLoading && (
            <div className="flex justify-center items-center w-full">
                <Spinner />
            </div>
        )
      }
      {isAuthenticated && !isLoading && (
          <Button asChild>
          <Link href="/documents" className="bg-orange-500">
            Enter Miro
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
                <Button className="bg-orange-600">
                    Get Miro Free 
                    <ArrowRight className="h-4 w-4 ml-2 "/>
                </Button>
          </SignInButton>
      )}
      
        </div>
    )
}