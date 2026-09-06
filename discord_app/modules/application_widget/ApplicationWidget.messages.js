// === Module 3042: messagesProxy ===

// Module 3042 (messagesProxy)
import set from "set" /* 2 */;
import loadJsonAsset from "loadJsonAsset" /* 1120 */;
import registerAsset from "registerAsset" /* 3043 */;
import registerAsset2 from "registerAsset" /* 3044 */;
import registerAsset3 from "registerAsset" /* 3045 */;
import registerAsset4 from "registerAsset" /* 3046 */;
import registerAsset5 from "registerAsset" /* 3047 */;
import registerAsset6 from "registerAsset" /* 3048 */;
import registerAsset7 from "registerAsset" /* 3049 */;
import registerAsset8 from "registerAsset" /* 3050 */;
import registerAsset9 from "registerAsset" /* 3051 */;
import registerAsset10 from "registerAsset" /* 3052 */;
import registerAsset11 from "registerAsset" /* 3053 */;
import registerAsset12 from "registerAsset" /* 3054 */;
import registerAsset13 from "registerAsset" /* 3055 */;
import registerAsset14 from "registerAsset" /* 3056 */;
import registerAsset15 from "registerAsset" /* 3057 */;
import registerAsset16 from "registerAsset" /* 3058 */;
import registerAsset17 from "registerAsset" /* 3059 */;
import registerAsset18 from "registerAsset" /* 3060 */;
import registerAsset19 from "registerAsset" /* 3061 */;
import registerAsset20 from "registerAsset" /* 3062 */;
import module_1155 from "module_1155" /* 1155 */;

const loader = module_1155.createLoader({
  da() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  de() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset2);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  el() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset3);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset4);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset5);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  fr() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset6);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  it() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset7);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ja() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset8);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ko() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset9);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  nl() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset10);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  pl() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset11);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset12);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ru() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset13);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset14);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  th() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset15);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  tr() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset16);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  vi() {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset17);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset18);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset19);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = loadJsonAsset.loadJsonAsset(registerAsset20);
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = set.fileFinishedImporting("modules/application_widget/ApplicationWidget.messages.js");

export default messagesProxy;
export const messagesLoader = loader;