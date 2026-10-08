// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05387_LinearGradient.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ConstantsIOS = LockIcon(1105);
const LockIcon2 = LockIcon(8198);
const PremiumUpsellGradientBackground = LockIcon(9443);
require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const Gradients = fn(7140).Gradients;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  if (arg0 === obj2.START) {
    num = 6;
  }
  const obj = { height: 28, flex: 1, justifyContent: "center", marginTop: num, marginBottom: null };
  let num2;
  if (arg0 === obj2.END) {
    num2 = 6;
  }
  obj2 = { container: obj, lockContainer: null, lockGradient: null, lock: null, divider: null, gradient: null };
  obj.marginBottom = num2;
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.lockContainer = { justifyContent: "center", alignItems: "center" };
  const size = { width: 28, height: 28, justifyContent: "center", borderRadius: nativeDefault.radii.round };
  obj2.lockGradient = size;
  obj2.lock = { width: 16, height: 16, alignSelf: "center" };
  obj2.divider = { height: 1 };
  let num3;
  if (arg0 === obj2.START) {
    num3 = 0;
  }
  const rect = { flex: 1, height: 14, left: 0, right: 0, position: "absolute", bottom: num3, top: null };
  let num4;
  if (arg0 === obj2.END) {
    num4 = 0;
  }
  rect.top = num4;
  obj2.gradient = rect;
  return obj2;
});
let obj2 = { START: 0, [0]: "START", END: 1, [1]: "END" };
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumUpsellSectionDivider(arg0) {
      let LockIcon = require;
      let lock = dependencyMap;
      const cResult = c.c(19);
      ({ useTier0UpsellContent, position } = arg0);
      const tmp2 = closure_8(position);
      if (cResult[0] !== useTier0UpsellContent) {
        obj2 = { useTier0UpsellContent };
        const tmp5 = timestampProducer(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
        cResult[0] = useTier0UpsellContent;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.gradient) {
        if (cResult[3] === tmp3) {
          let tmp6 = cResult[4];
        }
        if (true === useTier0UpsellContent) {
          let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
          let tmp8 = Gradients;
        } else {
          tmp8 = Gradients;
          PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
        }
        if (cResult[5] === tmp2.divider) {
          if (cResult[6] === PREMIUM_TIER_2_TRI_COLOR) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === position) {
            if (cResult[9] === tmp2.lock) {
              if (cResult[10] === tmp2.lockContainer) {
                if (cResult[11] === tmp2.lockGradient) {
                  if (cResult[12] === useTier0UpsellContent) {
                    let tmp15 = cResult[13];
                  }
                  if (cResult[14] === tmp2.container) {
                    if (cResult[15] === tmp6) {
                      if (cResult[16] === tmp10) {
                        if (cResult[17] === tmp15) {
                          let tmp23 = cResult[18];
                        }
                        return tmp23;
                      }
                    }
                  }
                  const obj3 = { style: tmp2.container, children: null };
                  const items = [tmp6, tmp10, tmp15];
                  obj3.children = items;
                  const tmp26 = React5(React4, obj3);
                  cResult[14] = tmp2.container;
                  cResult[15] = tmp6;
                  cResult[16] = tmp10;
                  cResult[17] = tmp15;
                  cResult[18] = tmp26;
                  tmp23 = tmp26;
                }
              }
            }
          }
          if (position !== obj2.START) {
            cResult[8] = position;
            cResult[9] = tmp2.lock;
            cResult[10] = tmp2.lockContainer;
            cResult[11] = tmp2.lockGradient;
            cResult[12] = useTier0UpsellContent;
            cResult[13] = tmp17;
            tmp15 = tmp17;
          } else {
            const obj4 = { style: tmp2.lockContainer, children: null };
            let obj5 = {
              style: tmp2.lockGradient,
              start: ConstantsIOS.HorizontalGradient.START,
              end: ConstantsIOS.HorizontalGradient.END,
              colors: useTier0UpsellContent ? tmp8.PREMIUM_TIER_0 : tmp8.PREMIUM_TIER_2_TRI_COLOR,
              children: null,
            };
            LockIcon = LockIcon2.LockIcon;
            const obj6 = { color: nativeDefault.colors.WHITE, style: null };
            lock = tmp2.lock;
            obj6.style = lock;
            obj5.children = timestampProducer(LockIcon, obj6);
            obj5 = timestampProducer(LinearGradientDefault, obj5);
            obj4.children = obj5;
            timestampProducer(React4, obj4);
          }
        }
        const obj7 = {
          style: tmp2.divider,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          colors: PREMIUM_TIER_2_TRI_COLOR,
        };
        const tmp14 = timestampProducer(LinearGradientDefault, obj7);
        cResult[5] = tmp2.divider;
        cResult[6] = PREMIUM_TIER_2_TRI_COLOR;
        cResult[7] = tmp14;
        tmp10 = tmp14;
      }
      const tmp7 = timestampProducer(React4, { style: tmp2.gradient, children: tmp3 });
      cResult[2] = tmp2.gradient;
      cResult[3] = tmp3;
      cResult[4] = tmp7;
      tmp6 = tmp7;
      const obj8 = { style: tmp2.gradient, children: tmp3 };
    }
  : function PremiumUpsellSectionDivider(arg0) {
      ({ useTier0UpsellContent, position } = arg0);
      let lock = closure_8(position);
      const obj = { style: lock.container, children: null };
      obj2 = {
        style: lock.gradient,
        children: timestampProducer(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {
          useTier0UpsellContent,
        }),
      };
      let LockIcon = require;
      let WHITE = dependencyMap;
      const items = [timestampProducer(React4, obj2), ,];
      const obj3 = {
        style: lock.divider,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: null,
      };
      if (true === useTier0UpsellContent) {
        let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
        let tmp6 = Gradients;
      } else {
        tmp6 = Gradients;
        PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
      }
      obj3.colors = PREMIUM_TIER_2_TRI_COLOR;
      items[1] = timestampProducer(LinearGradientDefault, obj3);
      if (position !== obj2.START) {
        items[2] = tmp8;
        obj.children = items;
        return React5(React4, obj);
      } else {
        const obj4 = { style: lock.lockContainer, children: null };
        let obj5 = {
          style: lock.lockGradient,
          start: ConstantsIOS.HorizontalGradient.START,
          end: ConstantsIOS.HorizontalGradient.END,
          colors: useTier0UpsellContent ? tmp6.PREMIUM_TIER_0 : tmp6.PREMIUM_TIER_2_TRI_COLOR,
          children: null,
        };
        LockIcon = LockIcon2.LockIcon;
        const obj6 = { color: null, style: null };
        WHITE = nativeDefault.colors.WHITE;
        obj6.color = WHITE;
        lock = lock.lock;
        obj6.style = lock;
        obj5.children = timestampProducer(LockIcon, obj6);
        obj5 = timestampProducer(LinearGradientDefault, obj5);
        obj4.children = obj5;
        timestampProducer(React4, obj4);
        const tmp4Result = LinearGradientDefault;
      }
    };
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = obj2;
