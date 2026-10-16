// discord_app/modules/app_startup/native/DeepLinkProcessor/DeepLinkProcessor.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_startup/native/DeepLinkProcessor/DeepLinkProcessor.tsx");
class DeepLinkProcessor {
  constructor(arg0) {
    obj = require;
    if (require === undefined) {
      obj = {};
    }
    merged = Object.assign({ initialUrlsHandled: false, pendingEvents: null });
    merged[1] = [];
    merged.handleEvent = global;
    isAndroid = obj.isAndroid;
    if (isAndroid == null) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj2 = closure_0(closure_1[0]);
      isAndroid = obj2.isAndroid();
    }
    merged.android = isAndroid;
    return merged;
  }
}
const prototype = DeepLinkProcessor.prototype;
prototype["process"] = function process(url) {
  this.processEvent({ url, source: "linking" });
};
prototype["processNative"] = function processNative(url, source, isDeferred, isColdStart) {
  if ("appsflyer" === source) {
    const obj2 = { url, source, isDeferred, isColdStart };
    let obj = obj2;
  } else {
    obj = { url, source };
  }
  this.processEvent(obj);
};
prototype["processEvent"] = function processEvent(arg0) {
  const self = this;
  if (this.android) {
    if (self.initialUrlsHandled) {
      self.handleEvent(arg0, false);
    } else {
      const pendingEvents = self.pendingEvents;
      pendingEvents.push(arg0);
    }
  } else {
    self.handleEvent(arg0, false);
  }
};
prototype["finishInitialUrls"] = function finishInitialUrls() {
  const self = this;
  if (this.android) {
    if (!self.initialUrlsHandled) {
      self.initialUrlsHandled = true;
      const pendingEvents = self.pendingEvents;
      self.pendingEvents = [];
      const item = pendingEvents.forEach((item) => self.handleEvent(item, true));
    }
  }
};

export default DeepLinkProcessor;
