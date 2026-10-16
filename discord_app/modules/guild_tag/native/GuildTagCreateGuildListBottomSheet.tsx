// discord_app/modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx
import util from "../../../intl/index.native.tsx";
import Powerups from "../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import openGuildPowerupsModalDefault from "../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRow(guild) {
      const cResult = guild(576).c(15);
      guild = guild.guild;
      const analyticsLocation = guild.analyticsLocation;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberCountStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function u() {
          return GuildMemberCountStore.getMemberCount(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = guild(576);
      const stateFromStores = guild(504).useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        let formatToPlainStringResult = null;
        if (null != stateFromStores) {
          const intl = tmp(1128).intl;
          let obj2 = { count: stateFromStores };
          formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.zRl6XR, obj2);
        }
        cResult[3] = stateFromStores;
        cResult[4] = formatToPlainStringResult;
        let tmp8 = formatToPlainStringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== guild) {
        const obj3 = { guild, size: tmp(6381).GuildIconSizes.SMALL_32 };
        const tmp14 = closure_4(analyticsLocation(6381), obj3);
        cResult[5] = guild;
        cResult[6] = tmp14;
        let tmp10 = tmp14;
        const tmp13 = analyticsLocation(6381);
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === analyticsLocation) {
        if (cResult[8] === guild.id) {
          let tmp15 = cResult[9];
        }
        if (cResult[10] === guild.name) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp15) {
                let tmp16 = cResult[14];
              }
              return tmp16;
            }
          }
        }
        const obj4 = { label: guild.name, subLabel: tmp8, icon: tmp10, arrow: true, onPress: tmp15 };
        const tmp18 = closure_4(tmp(6402).TableRow, obj4);
        cResult[10] = guild.name;
        cResult[11] = tmp8;
        cResult[12] = tmp10;
        cResult[13] = tmp15;
        cResult[14] = tmp18;
        tmp16 = tmp18;
      }
      class L {
        constructor() {
          obj = closure_1(closure_2[8]);
          hideActionSheetResult = obj.hideActionSheet();
          obj1 = { guildId: guild.id, autoOpenPerkId: null, analyticsLocation: null };
          tmp2 = closure_1(closure_2[9]);
          obj1.autoOpenPerkId = closure_0(closure_2[10]).GUILD_POWERUP_TAG_SKU_ID;
          obj1.analyticsLocation = analyticsLocation;
          tmp2Result = tmp2(obj1);
          return;
        }
      }
      cResult[7] = analyticsLocation;
      cResult[8] = guild.id;
      cResult[9] = L;
      tmp15 = L;
      const tmpResult = guild(504);
    }
  : function GuildRow(guild) {
      guild = guild.guild;
      const analyticsLocation = guild.analyticsLocation;
      const items = [GuildMemberCountStore];
      const stateFromStores = guild(504).useStateFromStores(items, () =>
        GuildMemberCountStore.getMemberCount(guild.id),
      );
      let obj2 = { label: guild.name, subLabel: null, icon: null, arrow: true, onPress: null };
      let formatToPlainStringResult = null;
      if (null != stateFromStores) {
        const intl = tmp(1128).intl;
        const obj3 = { count: stateFromStores };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.zRl6XR, obj3);
      }
      obj2.subLabel = formatToPlainStringResult;
      const obj4 = { guild, size: null };
      let obj = guild(504);
      obj4.size = guild(6381).GuildIconSizes.SMALL_32;
      obj2.icon = closure_4(analyticsLocation(6381), obj4);
      obj2.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj2 = { guildId: guild.id, autoOpenPerkId: null, analyticsLocation: null };
        obj2.autoOpenPerkId = Powerups.GUILD_POWERUP_TAG_SKU_ID;
        obj2.analyticsLocation = analyticsLocation;
        openGuildPowerupsModalDefault(obj2);
      };
      return closure_4(guild(6402).TableRow, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildTagCreateGuildListBottomSheet(arg0) {
      const cResult = analyticsLocation(576).c(8);
      ({ guilds, analyticsLocation } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null, subtitle: null };
        const intl = analyticsLocation(1128).intl;
        obj2.title = intl.string(analyticsLocation(1128).t.xO5QzM);
        const intl2 = analyticsLocation(1128).intl;
        obj2.subtitle = intl2.string(analyticsLocation(1128).t["h+7Yx3"]);
        const tmp6 = closure_4(analyticsLocation(7062).BottomSheetTitleHeader, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === analyticsLocation) {
        if (cResult[2] === guilds) {
          if (cResult[6] !== cResult[3]) {
            const obj3 = { children: null };
            const items = [first];
            const obj4 = { hasIcons: true, children: tmp7 };
            items[1] = closure_4(analyticsLocation(6487).TableRowGroup, obj4);
            obj3.children = items;
            const tmp13 = closure_5(analyticsLocation(7120).ActionSheet, obj3);
            cResult[6] = tmp7;
            cResult[7] = tmp13;
            let tmp10 = tmp13;
          } else {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      if (cResult[4] !== analyticsLocation) {
        const fn = function c(guild) {
          return React4(closure_6, { guild, analyticsLocation }, guild.id);
        };
        cResult[4] = analyticsLocation;
        cResult[5] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[5];
      }
      const mapped = guilds.map(tmp8);
      cResult[1] = analyticsLocation;
      cResult[2] = guilds;
      cResult[3] = mapped;
      const obj = analyticsLocation(576);
    }
  : function GuildTagCreateGuildListBottomSheet(arg0) {
      ({ guilds, analyticsLocation: require } = arg0);
      const obj = { children: null };
      const obj2 = { title: null, subtitle: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.xO5QzM);
      const intl2 = util.intl;
      obj2.subtitle = intl2.string(util.t["h+7Yx3"]);
      const items = [
        closure_4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2),
        closure_4(TableRowGroup.TableRowGroup, {
          hasIcons: true,
          children: guilds.map((guild) => React4(closure_6, { guild, analyticsLocation }, guild.id)),
        }),
      ];
      obj.children = items;
      return closure_5(ActionSheet.ActionSheet, obj);
    };
