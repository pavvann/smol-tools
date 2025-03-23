"use client"

import { useState } from "react"
import { Check, Clipboard } from "lucide-react" 

interface CopyButtonProps {
    textToCopy: string;
}

export default function CopyButton({textToCopy}: CopyButtonProps) {
    const [copied, setCopied] = useState(false)
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error("Faied to copy text: ", error)
        }
    }
    return (
        <button onClick={handleCopy} className="flex items-center space-x-2">
            {copied ? (
                <>
                <Check className="w-4 h-4" /> <span>Copied!</span>
                </>
            ) : (
                <>
                <Clipboard className="w-4 h-4" /> <span>Copy</span>
                </>
            )}
        </button>
    )

}