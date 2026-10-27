// === Module 11504: createEmbeddedAppFrameScript ===

// Module 11504 (createEmbeddedAppFrameScript)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/createEmbeddedAppFrameScript.tsx");

export const createEmbeddedAppFrameScript = function createEmbeddedAppFrameScript(embeddedAppOrigin) {
  ({ insets, messageForDisallowedNavigationError } = embeddedAppOrigin);
  const json = JSON.stringify(embeddedAppOrigin.embeddedAppOrigin);
  if (insets == null) {
    insets = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const rect = { top: insets.top, bottom: insets.bottom, left: insets.left, right: insets.right };
  const combined = "\n  var insets = " + JSON.stringify(rect) + ";\n  function writeSafeAreaVars() {\n    var root = document.documentElement;\n    if (root == null) return false;\n    root.style.setProperty('--discord-safe-area-inset-left', insets.left + 'px');\n    root.style.setProperty('--discord-safe-area-inset-right', insets.right + 'px');\n    root.style.setProperty('--discord-safe-area-inset-top', insets.top + 'px');\n    root.style.setProperty('--discord-safe-area-inset-bottom', insets.bottom + 'px');\n    return true;\n  }\n\n  if (!writeSafeAreaVars()) {\n    var observer = new MutationObserver(function () {\n      if (writeSafeAreaVars()) observer.disconnect();\n    });\n    observer.observe(document, {childList: true});\n  }\n  window.addEventListener('load', writeSafeAreaVars);\n\n  window.addEventListener('message', function (e) {\n    var message = e.data;\n    if (e.source !== window.parent || message == null || message.type !== 'safeAreaUpdateEvent') return;\n    insets = message.data.insets;\n    if (writeSafeAreaVars()) {\n      window.dispatchEvent(new Event('resize'));\n      document.documentElement.offsetHeight;\n    }\n  });\n";
  let str = "";
  if (null != messageForDisallowedNavigationError) {
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    str = "\n  var bridge = window.ReactNativeWebView;\n  if (window !== window.top && window.parent === window.top && bridge != null) {\n    var notifyNative = bridge.postMessage.bind(bridge, " + JSON.stringify(messageForDisallowedNavigationError) + ");\n    window.addEventListener(\n      'beforeunload',\n      function (e) {\n        notifyNative();\n        e.preventDefault();\n      },\n      true,\n    );\n  }\n";
  }
  return "\n(function () {\n  if (window.origin !== " + json + ") return;\n" + combined + "\n" + str + "\n})();\n";
};