// === Module 19999: filterIntegrationApps ===

// Module 19999 (filterIntegrationApps)
import fuzzysearchDefault from "fuzzysearch" /* 6988 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/integration_settings/filterIntegrationApps.tsx");

export default function filterIntegrationApps(arr, str) {
  str = str.trim();
  const formatted = str.toLowerCase();
  if ("" === formatted) {
    items = [];
    HermesBuiltin.arraySpread(arr, 0);
    let found = items;
  } else {
    found = arr.filter((application) => {
      application = application.application;
      let tmp5Result = application.id === formatted;
      if (!tmp5Result) {
        tmp5Result = fuzzysearchDefault(formatted, application.name.toLowerCase());
      }
      if (!tmp5Result) {
        let tmp10Result = null != application.bot;
        if (tmp10Result) {
          tmp10Result = fuzzysearchDefault(formatted, application.bot.username.toLowerCase());
        }
        tmp5Result = tmp10Result;
      }
      return tmp5Result;
    });
  }
  return found;
};