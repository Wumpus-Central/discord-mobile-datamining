// === Module 9016: ? ===

// Module 9016

export function isHttpUrl(url) {
  if (!url.startsWith("http://")) {
    if (!url.startsWith("https://")) {
      const charCodeAtResult = url.charCodeAt(0);
      let isMatch = 104 === charCodeAtResult;
      if (!isMatch) {
        isMatch = 72 === charCodeAtResult;
      }
      if (isMatch) {
        isMatch = /^https?:/i.test(url);
        const obj = /^https?:/i;
      }
      return isMatch;
    }
  }
  return true;
}
export function getUrlString(url) {
  if (typeof url === "string") {
    return url;
  } else {
    const _URL = URL;
    if (url instanceof URL) {
      return url.toString();
    } else {
      url = undefined;
      if (url != null) {
        url = url.url;
      }
      if (typeof url !== "string") {
        const _String = String;
        url = String(url);
      }
      return url;
    }
  }
}