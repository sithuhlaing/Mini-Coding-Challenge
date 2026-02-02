/**
 * Extracts "HeartRate" values as numbers from a log string.
 * It ignores non-numeric values like "error".
 */
export function extractHeartRates(input: string): number[] {
  // Regex looks for 'HeartRate=', captures digits, and ignores surrounding noise
  const regex = /HeartRate=\s*(\d+)/g;
  const results: number[] = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    results.push(parseInt(match[1], 10));
  }

  return results;
}

// --- Test Execution ---
const inputString = "LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL";
const heartRates = extractHeartRates(inputString);

console.log("Input:", inputString);
console.log("Output:", heartRates); // Expected: [72, 85]