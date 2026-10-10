// discord_app/modules/guild_sidebar/native/ChannelBadge.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import NumberUtils from "../../../../discord_common/js/shared/utils/NumberUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NewBadgeDefault from "../../channel_list_v2/native/components/NewBadge.tsx";
import MentionsBadgeDefault from "MentionsBadge.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelBadge(isNewChannel) {
      const cResult = c.c(19);
      ({ mentionCount, isMentionLowImportance, postsWithUnreadsCount, muted } = isNewChannel);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function u() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
      if (null != mentionCount) {
        if (mentionCount > 0) {
          if (cResult[2] === isMentionLowImportance) {
            if (cResult[3] === mentionCount) {
              let tmp26 = cResult[4];
            }
            if (cResult[5] === tmp4.channelInfoContainer) {
              if (cResult[6] === tmp26) {
                let tmp30 = cResult[7];
              }
              return tmp30;
            }
            const obj2 = { style: tmp4.channelInfoContainer, children: tmp26 };
            const tmp33 = <View style={tmp4.channelInfoContainer}>{tmp26}</View>;
            cResult[5] = tmp4.channelInfoContainer;
            cResult[6] = tmp26;
            cResult[7] = tmp33;
            tmp30 = tmp33;
          }
          const obj3 = { mentionsCount: mentionCount, isMentionLowImportance };
          const tmp29 = jsx(MentionsBadgeDefault, { mentionsCount: mentionCount, isMentionLowImportance });
          cResult[2] = isMentionLowImportance;
          cResult[3] = mentionCount;
          cResult[4] = tmp29;
          tmp26 = tmp29;
        }
      }
      if (isNewChannel.isNewChannel) {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = jsx(NewBadgeDefault, {});
          cResult[8] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp4.channelInfoContainer) {
          const obj4 = { style: tmp4.channelInfoContainer, children: tmp18 };
          const tmp25 = <View style={tmp4.channelInfoContainer}>{tmp18}</View>;
          cResult[9] = tmp4.channelInfoContainer;
          cResult[10] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[10];
        }
        return tmp22;
      } else {
        if (null != muted) {
          if (!muted) {
            if (null != postsWithUnreadsCount) {
              if (postsWithUnreadsCount > 0) {
                if (cResult[11] === stateFromStores) {
                  if (cResult[12] === postsWithUnreadsCount) {
                    let tmp9 = cResult[13];
                  }
                  if (cResult[14] !== tmp9) {
                    const obj5 = { variant: "text-xs/semibold", color: "text-muted", children: tmp9 };
                    const tmp13 = jsx(Text_Text.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: tmp9,
                    });
                    cResult[14] = tmp9;
                    cResult[15] = tmp13;
                    let tmp11 = tmp13;
                  } else {
                    tmp11 = cResult[15];
                  }
                  if (cResult[16] === tmp4.channelInfoContainer) {
                    if (cResult[17] === tmp11) {
                      let tmp14 = cResult[18];
                    }
                    return tmp14;
                  }
                  const obj6 = { style: tmp34, children: tmp11 };
                  const tmp17 = <View style={tmp34}>{tmp11}</View>;
                  cResult[16] = tmp4.channelInfoContainer;
                  cResult[17] = tmp11;
                  cResult[18] = tmp17;
                  tmp14 = tmp17;
                }
                const humanizeValueResult = NumberUtils.humanizeValue(postsWithUnreadsCount, stateFromStores);
                cResult[11] = stateFromStores;
                cResult[12] = postsWithUnreadsCount;
                cResult[13] = humanizeValueResult;
                tmp9 = humanizeValueResult;
                const tmpResult2 = NumberUtils;
              }
            }
          }
        }
        return null;
      }
      const tmpResult = useStateFromStores;
    }
  : function ChannelBadge(arg0) {
      ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
      ({ isMentionLowImportance, isNewChannel } = arg0);
      const tmp = closure_6();
      const items = [LocaleStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () => locale.locale);
      if (null != mentionCount) {
        if (mentionCount > 0) {
          const obj2 = { style: tmp.channelInfoContainer, children: null };
          const obj3 = { mentionsCount: mentionCount, isMentionLowImportance };
          obj2.children = jsx(MentionsBadgeDefault, { mentionsCount: mentionCount, isMentionLowImportance });
          let tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
        }
        return tmp5;
      }
      if (isNewChannel) {
        const obj4 = { style: tmp.channelInfoContainer, children: jsx(NewBadgeDefault, {}) };
        tmp5 = <View style={tmp.channelInfoContainer}>{jsx(NewBadgeDefault, {})}</View>;
      } else {
        tmp5 = null;
        if (null != muted) {
          tmp5 = null;
          if (!muted) {
            tmp5 = null;
            if (null != postsWithUnreadsCount) {
              tmp5 = null;
              if (postsWithUnreadsCount > 0) {
                const obj5 = { style: tmp.channelInfoContainer, children: null };
                const obj6 = {
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children: NumberUtils.humanizeValue(postsWithUnreadsCount, stateFromStores),
                };
                obj5.children = jsx(Text_Text.Text, {
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children: NumberUtils.humanizeValue(postsWithUnreadsCount, stateFromStores),
                });
                tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
                const tmp2Result = NumberUtils;
              }
            }
          }
        }
      }
    };
