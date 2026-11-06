// === Module 9958: NitroFetchHybrid ===

// Module 9958 (NitroFetchHybrid)
import hybridObject from "hybridObject" /* 9956 */;


export const NitroFetchHybrid = hybridObject.NitroFetch;
export function ensureClient() {
  if (client) {
    return client;
  } else {
    try {
      const NitroFetch = hybridObject.NitroFetch;
      client = NitroFetch.createClient();
      c3 = undefined;
      return client;
    } catch (tmp5) {
      c3 = tmp5;
      const _console = console;
      console.error("Failed to create NitroFetch client", tmp5);
    }
  }
}
export function clientUnavailableError() {
  if (c3 instanceof Error) {
    let error = c3;
  } else {
    const _Error = Error;
    error = new Error("NitroFetch client not available");
  }
  return error;
}