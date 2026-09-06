// === Module 9652: useEmbeddedActivityBackground ===

// Module 9652 (useEmbeddedActivityBackground)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = ["embedded_cover", "embedded_background"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  applicationId = applicationId.applicationId;
  ({ size, names } = applicationId);
  if (names === undefined) {
    names = ref;
  }
  let str = applicationId.format;
  if (str === undefined) {
    str = "png";
  }
  _slicedToArray = undefined;
  noop = undefined;
  ref = undefined;
  [tmp2, c2] = _slicedToArray(noop.useState(null), 2);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  noop = tmp3[1];
  const tmp = _slicedToArray(noop.useState(null), 2);
  const url = applicationId(names[2]).getAssetImage(applicationId, tmp2, size, str);
  let state = "loading";
  if (!tmp3[0]) {
    let str3 = "not-found";
    if (null != url) {
      str3 = "fetched";
    }
    state = str3;
  }
  ref = obj.useRef(names);
  const effect = obj.useEffect(() => {
    closure_4.current = names;
  });
  const items = [applicationId];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const assets = applicationId(names[2]).getAssets(tmp);
      assets.then((result) => {
        closure_3(false);
        const entries = Object.entries(result);
        const obj = entries[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp5 = _slicedToArray(tmp3, 2);
          [r10020, tmp6] = tmp5;
          let tmp7 = tmp6;
          if (null != tmp6) {
            if ("" !== tmp7.id) {
              if (current.includes(tmp7.name)) {
                let tmp12 = c2(tmp6.id);
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