import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToAscii(inputStr: string) {
  const asciiString = inputStr.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}
