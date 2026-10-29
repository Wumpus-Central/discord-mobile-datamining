// === Module 11596: createEmbeddedAppFrameScript ===

// Module 11596 (createEmbeddedAppFrameScript)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/embedded_apps/native/webview/createEmbeddedAppFrameScript.tsx");

export function createEmbeddedAppFrameScript(insets) {
  let rect = insets.insets;
  const json = JSON.stringify(insets.embeddedAppOrigin);
  if (rect == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const rect1 = { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right };
  return "\n(function () {\n  if (window.origin !== " + json + ") return;\n" + "\n  var insets = " + JSON.stringify(rect1) + ";\n  function writeSafeAreaVars() {\n    var root = document.documentElement;\n    if (root == null) return false;\n    root.style.setProperty('--discord-safe-area-inset-left', insets.left + 'px');\n    root.style.setProperty('--discord-safe-area-inset-right', insets.right + 'px');\n    root.style.setProperty('--discord-safe-area-inset-top', insets.top + 'px');\n    root.style.setProperty('--discord-safe-area-inset-bottom', insets.bottom + 'px');\n    return true;\n  }\n\n  if (!writeSafeAreaVars()) {\n    var observer = new MutationObserver(function () {\n      if (writeSafeAreaVars()) observer.disconnect();\n    });\n    observer.observe(document, {childList: true});\n  }\n  window.addEventListener('load', writeSafeAreaVars);\n\n  window.addEventListener('message', function (e) {\n    var message = e.data;\n    if (e.source !== window.parent || message == null || message.type !== 'safeAreaUpdateEvent') return;\n    insets = message.data.insets;\n    if (writeSafeAreaVars()) {\n      window.dispatchEvent(new Event('resize'));\n      document.documentElement.offsetHeight;\n    }\n  });\n" + "\n})();\n";
}