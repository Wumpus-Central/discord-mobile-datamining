// discord_app/modules/activities/utils/useEmbeddedActivityBackground.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

const require = fn;
let closure_4 = ["embedded_cover", "embedded_background"];
const result = require("obj132").fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  applicationId = applicationId.applicationId;
  ({ size, names } = applicationId);
  if (names === undefined) {
    names = closure_4;
  }
  let str = applicationId.format;
  if (str === undefined) {
    str = "png";
  }
  let callback;
  let React;
  closure_4 = undefined;
  [tmp2, c2] = callback(React.useState(null), 2);
  const tmp3 = callback(React.useState(true), 2);
  React = tmp3[1];
  const tmp = callback(React.useState(null), 2);
  const url = applicationId(names[2]).getAssetImage(applicationId, tmp2, size, str);
  let state = "loading";
  if (!tmp3[0]) {
    let str3 = "not-found";
    if (null != url) {
      str3 = "fetched";
    }
    state = str3;
  }
  closure_4 = obj.useRef(names);
  const effect = obj.useEffect(() => {
    closure_4.current = names;
  });
  const items = [applicationId];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const assets = applicationId(names[2]).getAssets(tmp);
      assets.then((result) => {
        closure_1_3(false);
        const entries = Object.entries(result);
        const obj = entries[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp5 = callback(tmp3, 2);
          [r10020, tmp6] = tmp5;
          if (null != tmp6) {
            if ("" !== tmp6.id) {
              if (current.includes(tmp6.name)) {
                let tmp12 = closure_1_2(tmp6.id);
                obj.return();
              }
            }
          }
          continue;
        }
      });
      let obj = applicationId(names[2]);
    }
  }, items);
  return { url, state };
};