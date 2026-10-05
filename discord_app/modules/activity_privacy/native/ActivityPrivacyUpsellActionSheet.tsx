// discord_app/modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ActivityPrivacyUpsellUtils from "../ActivityPrivacyUpsellUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let direction;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (direction) => {
      let confirmText;
      let subtitle;
      let title;
      let toastContent;
      let obj = direction(576);
      const cResult = obj.c(14);
      const tmp = direction;
      direction = direction.direction;
      const affectedGuildIds = direction.affectedGuildIds;
      const settingName = direction.settingName;
      const tmp4 = direction === direction(14659).ChangeDirection.RESTRICTING;
      if (cResult[0] === tmp4) {
        let tmp5;
        if (cResult[1] === settingName) {
          tmp5 = cResult[2];
        }
        ({ title, subtitle, confirmText, toastContent } = tmp5);
        if (cResult[3] === affectedGuildIds) {
          let tmp7;
          if (cResult[4] === direction) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === affectedGuildIds) {
            if (cResult[7] === confirmText) {
              if (cResult[8] === direction) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === subtitle) {
                    if (cResult[11] === title) {
                      let tmp8;
                      if (cResult[12] === toastContent) {
                        tmp8 = cResult[13];
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
          class C {
            constructor() {
              obj = closure_0(closure_2[4]);
              result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
              return;
            }
          }
          const tmp11 = jsx(affectedGuildIds(14661), {
            direction,
            affectedGuildIds: null,
            title,
            subtitle,
            confirmText,
            toastContent,
            onConfirm: tmp7,
          });
          cResult[6] = affectedGuildIds;
          cResult[7] = confirmText;
          cResult[8] = direction;
          cResult[9] = tmp7;
          cResult[10] = subtitle;
          cResult[11] = title;
          cResult[12] = toastContent;
          cResult[13] = tmp11;
          tmp8 = tmp11;
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[4]);
            result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
            return;
          }
        }
        cResult[3] = affectedGuildIds;
        cResult[4] = direction;
        cResult[5] = C;
        tmp7 = C;
      }
      const tmpResult = tmp(14659);
      const upsellStrings = tmpResult.getUpsellStrings(tmp4, settingName);
      cResult[0] = tmp4;
      cResult[1] = settingName;
      cResult[2] = upsellStrings;
      tmp5 = upsellStrings;
    }
  : (direction) => {
      let confirmText;
      let subtitle;
      let title;
      let toastContent;
      direction = direction.direction;
      const affectedGuildIds = direction.affectedGuildIds;
      const settingName = direction.settingName;
      const RESTRICTING = direction(14659).ChangeDirection.RESTRICTING;
      let obj = direction(14659);
      const upsellStrings = obj.getUpsellStrings(direction === RESTRICTING, settingName);
      const items = [direction, affectedGuildIds];
      ({ title, subtitle, confirmText, toastContent } = upsellStrings);
      const onConfirm = react.useCallback(() => {
        const obj = ActivityPrivacyUpsellUtils;
        const result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
      }, items);
      return jsx(affectedGuildIds(14661), {
        direction,
        affectedGuildIds,
        title,
        subtitle,
        confirmText,
        toastContent,
        onConfirm,
      });
    };
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default tmp2;
