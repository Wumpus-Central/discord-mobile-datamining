// discord_app/modules/integration_settings/filterIntegrationApps.tsx
import fuzzysearchDefault from "../../../_runtime/06988_fuzzysearch.js";
import size from "../../../_runtime/metro/00002__.js";

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
}
