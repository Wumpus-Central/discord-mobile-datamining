// discord_app/modules/collectibles/native/OrbsBadgeCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _modDef10892 from "../../../../discord_assets/assets/orbs/orbs_badge_asset.png.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["badgeRef"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
  coachmarkImage: { width: 80, height: 80 },
  coachmarkDescription: { marginBottom: -10 },
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      const tmp3 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { uri: _modDef10892 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3.coachmarkImage) {
        const obj3 = { source: first, style: tmp3.coachmarkImage };
        const tmp9 = <React5 source={first} style={tmp3.coachmarkImage} />;
        cResult[1] = tmp3.coachmarkImage;
        cResult[2] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp3.coachmarkImageContainer) {
        if (cResult[4] === tmp6) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = <timestampProducer style={tmp3.coachmarkImageContainer}>{tmp6}</timestampProducer>;
      cResult[3] = tmp3.coachmarkImageContainer;
      cResult[4] = tmp6;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const obj4 = { style: tmp3.coachmarkImageContainer, children: tmp6 };
    }
  : () => {
      const tmp = closure_9();
      const obj = { style: tmp.coachmarkImageContainer, children: null };
      const obj2 = { source: { uri: _modDef10892 }, style: tmp.coachmarkImage };
      obj.children = <React5 source={{ uri: _modDef10892 }} style={tmp.coachmarkImage} />;
      return <timestampProducer style={tmp.coachmarkImageContainer}>{null}</timestampProducer>;
    };
fn(558);
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  if (closure_11) {
    let obj3 = require;
    let coachmark = dependencyMap;
    const cResult = c.c(3);
    if (cResult[0] !== badgeRef) {
      badgeRef = badgeRef.badgeRef;
      const tmp13 = _objectWithoutProperties(badgeRef, closure_3);
      cResult[0] = badgeRef;
      cResult[1] = badgeRef;
      cResult[2] = tmp13;
      let tmp10 = tmp13;
      let tmp9 = badgeRef;
    } else {
      tmp9 = cResult[1];
      tmp10 = cResult[2];
    }
    obj3 = obj3(9895);
    coachmark = obj3.useCoachmark(tmp9, tmp10);
  } else {
    const merged = Object.assign(badgeRef, Object.assign({ badgeRef: 0 }));
    const coachmark1 = useCoachmark.useCoachmark(badgeRef.badgeRef, merged);
    return null;
  }
}
export const useOrbsBadgeCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? (disabled) => {
      const cResult = c.c(11);
      disabled = disabled.disabled;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["4ivm+P"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.coachmarkDescription) {
        const obj2 = { style: tmp4.coachmarkDescription };
        const tmp10 = <timestampProducer style={tmp4.coachmarkDescription} />;
        cResult[1] = tmp4.coachmarkDescription;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              rootNavigationRef.setParams({ showOrbsBadgeCoachmark: "r" });
            }
          }
          return false;
        };
        const fn2 = function f() {
          return <closure_1_10 />;
        };
        cResult[3] = fn;
        cResult[4] = fn2;
        let tmp13 = fn2;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      if (cResult[5] === tmp7) {
        if (cResult[6] === tmp11) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === disabled) {
          if (cResult[9] === tmp14) {
            let tmp15 = cResult[10];
          }
          return tmp15;
        }
        let tmp16 = null;
        if (!disabled) {
          const obj3 = { props: tmp14 };
          tmp16 = obj3;
        }
        cResult[8] = disabled;
        cResult[9] = tmp14;
        cResult[10] = tmp16;
        tmp15 = tmp16;
      }
      const obj4 = {
        title: first,
        description: tmp7,
        position: "bottom",
        visible: !disabled,
        onDismiss: tmp12,
        renderImgComponent: tmp13,
      };
      cResult[5] = tmp7;
      cResult[6] = !disabled;
      cResult[7] = obj4;
      tmp14 = obj4;
    }
  : (disabled) => {
      disabled = disabled.disabled;
      const tmp = closure_9();
      const coachmarkDescription = tmp;
      const items = [disabled, tmp.coachmarkDescription];
      let tmp3 = null;
      if (!disabled) {
        let obj = { props: tmp2 };
        tmp3 = obj;
      }
      return tmp3;
    };
