// discord_app/design/void/ThumbnailImage/native/ThumbnailImage.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1369);
if (PlatformUtils.isAndroid()) {
  _default = fn(13915).default;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        const tmp8 = <_default />;
        cResult[0] = arg0;
        cResult[1] = tmp8;
        let tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      const merged = Object.assign(arg0);
      return <_default />;
    };
