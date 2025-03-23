"use client"

import { ethers } from "ethers";
import { useState } from "react";

export default function checksum () {
    
    const [userAddress, setUserAddress] = useState("")
    const [checksumedAddress, setChecksumedAddress]  = useState("")
    const [icapAddress, setIcapAddress] = useState("")

    const convertFromUserAddress = (address: string) => {
        setChecksumedAddress(ethers.getAddress(address))
        setIcapAddress(ethers.getIcapAddress(address))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Get Checksum / ICAP Address</h1>
          <div className="flex flex-col gap-4 w-108">
            <input
              type="text"
              placeholder="Enter Address"
              value={userAddress}
              onChange={(e) => {
                setUserAddress(e.target.value);
                convertFromUserAddress(e.target.value);
              }}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Checksumed Address"
              value={checksumedAddress}
              onChange={(e) => {
                setChecksumedAddress(e.target.value);
                convertFromUserAddress(e.target.value);
              }}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="ICAP Address"
              value={icapAddress}
              onChange={(e) => {
                setIcapAddress(e.target.value);
                convertFromUserAddress(e.target.value);
              }}
              className="p-2 border rounded"
            />
          </div>
        </main>
      );
}