// discord_app/modules/collectibles/native/CollectiblesProgressiveImage.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["source", "style"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = sharedValue(576).c(16);
      if (cResult[0] !== arg0) {
        ({ source, style } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = source;
        cResult[3] = style;
        let tmp6 = style;
        let tmp5 = source;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const obj = sharedValue(576);
      sharedValue = sharedValue(4612).useSharedValue(0);
      if (cResult[4] !== sharedValue) {
        const fn = function h() {
          const obj2 = { duration: 500, easing: null };
          const Easing = ReanimatedRexport.Easing;
          obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
          const result = sharedValue.set(timing.withTiming(1, obj2));
        };
        cResult[4] = sharedValue;
        cResult[5] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== sharedValue) {
        let obj2 = {};
        const merged = Object.assign(closure_6.absoluteFillObject);
        obj2.opacity = sharedValue;
        cResult[6] = sharedValue;
        cResult[7] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp12) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp16) {
                let tmp19 = cResult[15];
              }
              return tmp19;
            }
            const obj3 = { style: tmp6, children: tmp16 };
            const tmp22 = <closure_5 style={tmp6}>{tmp16}</closure_5>;
            cResult[13] = tmp6;
            cResult[14] = tmp16;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
        }
      }
      const obj4 = {};
      const merged1 = Object.assign(tmp4);
      obj4.source = tmp5;
      obj4.style = tmp12;
      obj4.onLoad = tmp11;
      const tmp18 = jsx(ReanimatedRexportDefault.Image, {});
      cResult[8] = tmp11;
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp12;
      cResult[12] = tmp18;
      tmp16 = tmp18;
      const tmpResult = sharedValue(4612);
    }
  : (arg0) => {
      ({ source, style } = arg0);
      let sharedValue;
      const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
      sharedValue = sharedValue(4612).useSharedValue(0);
      let obj2 = { style, children: null };
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.source = source;
      const obj4 = {};
      const merged2 = Object.assign(closure_6.absoluteFillObject);
      obj4.opacity = sharedValue;
      obj3.style = obj4;
      obj3.onLoad = function onLoad() {
        const obj2 = { duration: 500, easing: null };
        const Easing = ReanimatedRexport.Easing;
        obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
        const result = sharedValue.set(timing.withTiming(1, obj2));
      };
      obj2.children = jsx(ReanimatedRexportDefault.Image, {});
      return <closure_5 style={style}>{null}</closure_5>;
    };
