// discord_app/modules/activities/utils/useEmbeddedActivityBackground.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let closure_4 = ["embedded_cover", "embedded_background"];
const result = require("updateAssets").fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  let c2;
  let names;
  let size;
  let tmp2;
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
      assets.then((arg0) => {
        let tmp6;
        outer1_3(false);
        const entries = Object.entries(arg0);
        const obj = entries[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp4 = callback;
          let tmp5 = callback(tmp3, 2);
          [r10020, tmp6] = tmp5;
          let tmp7 = tmp6;
          if (null != tmp6) {
            let tmp8 = tmp6;
            if ("" !== tmp7.id) {
              let tmp9 = current;
              let tmp10 = tmp6;
              if (current.includes(tmp7.name)) {
                let tmp11 = outer1_2;
                let tmp12 = outer1_2(tmp6.id);
                let tmp13 = obj;
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