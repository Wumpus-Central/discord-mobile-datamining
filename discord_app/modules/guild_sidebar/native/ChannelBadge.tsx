// discord_app/modules/guild_sidebar/native/ChannelBadge.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import NumberUtils from "../../../../discord_common/js/shared/utils/NumberUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NewBadgeDefault from "../../channel_list_v2/native/components/NewBadge.tsx";
import MentionsBadgeDefault from "MentionsBadge.tsx";
import react from "../../../../_runtime/00019_react.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isNewChannel) => {
      let isMentionLowImportance;
      let locale;
      let mentionCount;
      let muted;
      let postsWithUnreadsCount;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(19);
      ({ mentionCount, isMentionLowImportance, postsWithUnreadsCount, muted } = isNewChannel);
      isNewChannel = isNewChannel.isNewChannel;
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
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (null != mentionCount) {
        if (mentionCount > 0) {
          if (cResult[2] === isMentionLowImportance) {
            let tmp26;
            if (cResult[3] === mentionCount) {
              tmp26 = cResult[4];
            }
            if (cResult[5] === tmp4.channelInfoContainer) {
              let tmp30;
              if (cResult[6] === tmp26) {
                tmp30 = cResult[7];
              }
              return tmp30;
            }
            const tmp33 = <View style={tmp4.channelInfoContainer}>{tmp26}</View>;
            cResult[5] = tmp4.channelInfoContainer;
            cResult[6] = tmp26;
            cResult[7] = tmp33;
            tmp30 = tmp33;
          }
          const tmp29 = jsx(MentionsBadgeDefault, { mentionsCount: mentionCount, isMentionLowImportance });
          cResult[2] = isMentionLowImportance;
          cResult[3] = mentionCount;
          cResult[4] = tmp29;
          tmp26 = tmp29;
        }
      }
      if (isNewChannel) {
        let tmp18;
        let tmp22;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = jsx(NewBadgeDefault, {});
          cResult[8] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp4.channelInfoContainer) {
          const tmp25 = <View style={tmp4.channelInfoContainer}>{tmp18}</View>;
          cResult[9] = tmp4.channelInfoContainer;
          cResult[10] = tmp25;
          tmp22 = tmp25;
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
                  let tmp9;
                  let tmp11;
                  if (cResult[12] === postsWithUnreadsCount) {
                    tmp9 = cResult[13];
                  }
                  if (cResult[14] !== tmp9) {
                    const tmp13 = jsx(Text_Text.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: tmp9,
                    });
                    cResult[14] = tmp9;
                    cResult[15] = tmp13;
                    tmp11 = tmp13;
                  } else {
                    tmp11 = cResult[15];
                  }
                  if (cResult[16] === tmp4.channelInfoContainer) {
                    let tmp14;
                    if (cResult[17] === tmp11) {
                      tmp14 = cResult[18];
                    }
                    return tmp14;
                  }
                  const tmp17 = <View style={tmp34}>{tmp11}</View>;
                  cResult[16] = tmp4.channelInfoContainer;
                  cResult[17] = tmp11;
                  cResult[18] = tmp17;
                  tmp14 = tmp17;
                }
                const tmpResult2 = NumberUtils;
                const humanizeValueResult = tmpResult2.humanizeValue(postsWithUnreadsCount, stateFromStores);
                cResult[11] = stateFromStores;
                cResult[12] = postsWithUnreadsCount;
                cResult[13] = humanizeValueResult;
                tmp9 = humanizeValueResult;
              }
            }
          }
        }
        return null;
      }
    }
  : (arg0) => {
      let isMentionLowImportance;
      let isNewChannel;
      let locale;
      let mentionCount;
      let muted;
      let postsWithUnreadsCount;
      let tmp2Result;
      let tmp5;
      ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
      ({ isMentionLowImportance, isNewChannel } = arg0);
      const tmp = closure_6();
      const items = [LocaleStore];
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      if (null != mentionCount) {
        if (mentionCount > 0) {
          tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
        }
        return tmp5;
      }
      if (isNewChannel) {
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
                ({
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children: tmp2Result.humanizeValue(postsWithUnreadsCount, stateFromStores),
                });
                const Text = Text_Text.Text;
                tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
                tmp2Result = NumberUtils;
              }
            }
          }
        }
      }
    };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default tmp3;
