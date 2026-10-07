// discord_app/modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx
import ActivityPrivacyUpsellUtils from "../ActivityPrivacyUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/ActivityPrivacyUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (direction) => {
      const cResult = direction(576).c(14);
      direction = direction.direction;
      const affectedGuildIds = direction.affectedGuildIds;
      const settingName = direction.settingName;
      const tmp4 = direction === direction(14675).ChangeDirection.RESTRICTING;
      if (cResult[0] === tmp4) {
        if (cResult[1] === settingName) {
          let tmp5 = cResult[2];
        }
        ({ title, subtitle, confirmText, toastContent } = tmp5);
        if (cResult[3] === affectedGuildIds) {
          if (cResult[4] === direction) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === affectedGuildIds) {
            if (cResult[7] === confirmText) {
              if (cResult[8] === direction) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === subtitle) {
                    if (cResult[11] === title) {
                      if (cResult[12] === toastContent) {
                        let tmp8 = cResult[13];
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
          const obj2 = {
            direction,
            affectedGuildIds: null,
            title: null,
            subtitle: null,
            confirmText: null,
            toastContent: null,
            onConfirm: null,
          };
          class C {
            constructor() {
              obj = closure_0(closure_2[4]);
              result = obj.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
              return;
            }
          }
          obj2.title = title;
          obj2.subtitle = subtitle;
          obj2.confirmText = confirmText;
          obj2.toastContent = toastContent;
          obj2.onConfirm = tmp7;
          const tmp11 = jsx(affectedGuildIds(14677), {
            direction,
            affectedGuildIds: null,
            title: null,
            subtitle: null,
            confirmText: null,
            toastContent: null,
            onConfirm: null,
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
      const obj = direction(576);
      const upsellStrings = direction(14675).getUpsellStrings(tmp4, settingName);
      cResult[0] = tmp4;
      cResult[1] = settingName;
      cResult[2] = upsellStrings;
      tmp5 = upsellStrings;
      const tmpResult = direction(14675);
    }
  : (direction) => {
      direction = direction.direction;
      const affectedGuildIds = direction.affectedGuildIds;
      const upsellStrings = direction(14675).getUpsellStrings(
        direction === direction(14675).ChangeDirection.RESTRICTING,
        direction.settingName,
      );
      const items = [direction, affectedGuildIds];
      ({ title, subtitle, confirmText, toastContent } = upsellStrings);
      const onConfirm = noop.useCallback(() => {
        const result = ActivityPrivacyUpsellUtils.applyBulkGuildRestrictionChange(direction, affectedGuildIds);
      }, items);
      return jsx(affectedGuildIds(14677), {
        direction,
        affectedGuildIds,
        title,
        subtitle,
        confirmText,
        toastContent,
        onConfirm,
      });
    };
