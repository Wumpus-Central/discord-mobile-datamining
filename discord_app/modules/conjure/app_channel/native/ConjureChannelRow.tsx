// discord_app/modules/conjure/app_channel/native/ConjureChannelRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import RedesignChannelListConstants from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import BaseChannelItemDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import ChannelBadgeDefault from "../../../guild_sidebar/native/ChannelBadge.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let selected;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      let SELECTED;
      let badgeCount;
      let hasUnread;
      let id;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp15;
      let tmp19;
      let tmp5;
      let tmp7;
      let obj = id(576);
      const cResult = obj.c(20);
      selected = selected.selected;
      const guild = selected.guild;
      const tmp4 = closure_7();
      id = guild.id;
      if (cResult[0] !== id) {
        const fn = function s() {
          const obj = router_utils;
          obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
        };
        cResult[0] = id;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = id(16142);
      const conjureUnreadSummary = tmpResult.useConjureUnreadSummary();
      ({ hasUnread, badgeCount } = conjureUnreadSummary);
      if (true === selected) {
        SELECTED = tmp(12016).ChannelModes.SELECTED;
      } else {
        const ChannelModes = tmp(12016).ChannelModes;
        SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
      }
      const container = tmp4.container;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3723.uk6jhJ);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== selected) {
        const obj2 = { selected };
        cResult[3] = selected;
        cResult[4] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef3723.uk6jhJ);
        cResult[5] = stringResult1;
        tmp11 = stringResult1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== SELECTED) {
        const tmp17 = jsx(id(12016).BaseChannelName, { name: tmp11, mode: SELECTED });
        const BaseChannelIcon = tmp(12016).BaseChannelIcon;
        const tmp18 = <BaseChannelIcon mode={SELECTED} IconComponent={id(12500).MagicWandIcon} />;
        cResult[6] = SELECTED;
        cResult[7] = tmp17;
        cResult[8] = tmp18;
        tmp15 = tmp18;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      if (cResult[9] !== badgeCount) {
        const tmp22 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
        cResult[9] = badgeCount;
        cResult[10] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === SELECTED) {
        if (cResult[12] === tmp5) {
          if (cResult[13] === hasUnread) {
            if (cResult[14] === tmp4.container) {
              if (cResult[15] === tmp10) {
                if (cResult[16] === tmp14) {
                  if (cResult[17] === tmp15) {
                    let tmp23;
                    if (cResult[18] === tmp19) {
                      tmp23 = cResult[19];
                    }
                    return tmp23;
                  }
                }
              }
            }
          }
        }
      }
      const tmp24 = jsx(BaseChannelItemDefault, {
        onPress: tmp5,
        style: container,
        accessible: true,
        accessibilityLabel: tmp7,
        accessibilityState: tmp10,
        mode: SELECTED,
        unread: hasUnread,
        name: tmp14,
        icon: tmp15,
        channelInfo: tmp19,
      });
      cResult[11] = SELECTED;
      cResult[12] = tmp5;
      cResult[13] = hasUnread;
      cResult[14] = tmp4.container;
      cResult[15] = tmp10;
      cResult[16] = tmp14;
      cResult[17] = tmp15;
      cResult[18] = tmp19;
      cResult[19] = tmp24;
      tmp23 = tmp24;
    }
  : (selected) => {
      let SELECTED;
      let intl2;
      selected = selected.selected;
      const id = selected.guild.id;
      const items = [id];
      const tmp = closure_7();
      const callback = react.useCallback(() => {
        const obj = router_utils;
        obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
      }, items);
      let obj = id(16142);
      const conjureUnreadSummary = obj.useConjureUnreadSummary();
      const hasUnread = conjureUnreadSummary.hasUnread;
      const badgeCount = conjureUnreadSummary.badgeCount;
      if (true === selected) {
        SELECTED = tmp3(12016).ChannelModes.SELECTED;
      } else {
        const ChannelModes = tmp3(12016).ChannelModes;
        SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
      }
      BaseChannelItemDefault;
      const intl = tmp3(1126).intl;
      ({ name: intl2.string(_modDef3723.uk6jhJ), mode: SELECTED });
      const BaseChannelName = tmp3(12016).BaseChannelName;
      intl2 = tmp3(1126).intl;
      ({ mode: SELECTED, IconComponent: id(12500).MagicWandIcon });
      const BaseChannelIcon = tmp3(12016).BaseChannelIcon;
      return (
        <tmp6
          onPress={callback}
          style={tmp.container}
          accessible
          accessibilityLabel={intl.string(_modDef3723.uk6jhJ)}
          accessibilityState={{ selected }}
          mode={SELECTED}
          unread={hasUnread}
          name={null}
          icon={null}
          channelInfo={null}
        />
      );
    };
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default tmp2;
