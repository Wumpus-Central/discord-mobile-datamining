// === Module 9524: InstantInviteQRCodeActionSheet ===

// Module 9524 (InstantInviteQRCodeActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import components_native_QRCodeDefault from "components_native/QRCode" /* 9525 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, link;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ InstantInviteSources: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, icon: obj3, code: { alignSelf: "center" } };
obj2 = { padding: nativeDefault.space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let currentUser;
  let intl3;
  let intl4;
  let obj3;
  let obj4;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  channel = channel.channel;
  const _location = channel.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (null != channel) {
    let tmp8;
    if (cResult[2] !== channel.guild_id) {
      const _Symbol = Symbol;
      let forResult = Symbol.for("react.early_return_sentinel");
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null != guild) {
        const obj2 = { visible: intl3.format(intl5.t.VK3zyF, obj3), plainText: intl4.formatToPlainString(intl5.t.VK3zyF, obj4) };
        intl3 = intl5.intl;
        obj3 = { name: guild.name };
        intl4 = intl5.intl;
        forResult = obj2;
        obj4 = { name: guild.name };
      }
      cResult[2] = channel.guild_id;
      cResult[3] = forResult;
      tmp8 = forResult;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (tmp8 !== Symbol.for("react.early_return_sentinel")) {
      return tmp8;
    }
  }
  let tmp12 = null;
  if (_location === metroImportDefault.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      let tmp13;
      let tmp15;
      if (cResult[4] !== stateFromStores.username) {
        const intl = intl5.intl;
        const obj5 = { name: stateFromStores.username };
        const formatResult = intl.format(intl5.t.zDGAfl, obj5);
        cResult[4] = stateFromStores.username;
        cResult[5] = formatResult;
        tmp13 = formatResult;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== stateFromStores.username) {
        const intl2 = intl5.intl;
        const obj6 = { name: stateFromStores.username };
        const formatToPlainStringResult = intl2.formatToPlainString(intl5.t.zDGAfl, obj6);
        cResult[6] = stateFromStores.username;
        cResult[7] = formatToPlainStringResult;
        tmp15 = formatToPlainStringResult;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp13) {
        let tmp17;
        if (cResult[9] === tmp15) {
          tmp17 = cResult[10];
        }
        tmp12 = tmp17;
      }
      const obj7 = { visible: tmp13, plainText: tmp15 };
      cResult[8] = tmp13;
      cResult[9] = tmp15;
      cResult[10] = obj7;
      tmp17 = obj7;
    }
  }
  return tmp12;
}) : ((channel) => {
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  let obj6;
  let obj7;
  channel = channel.channel;
  const _location = channel.location;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      const obj2 = { visible: intl3.format(intl5.t.VK3zyF, obj3), plainText: intl4.formatToPlainString(intl5.t.VK3zyF, obj4) };
      intl3 = intl5.intl;
      obj3 = { name: guild.name };
      intl4 = intl5.intl;
      return obj2;
    }
  }
  let tmp6 = null;
  if (_location === metroImportDefault.ADD_FRIENDS_MODAL) {
    tmp6 = null;
    if (null != stateFromStores) {
      const obj5 = { visible: intl.format(intl5.t.zDGAfl, obj6), plainText: intl2.formatToPlainString(intl5.t.zDGAfl, obj7) };
      intl = intl5.intl;
      obj6 = { name: stateFromStores.username };
      intl2 = intl5.intl;
      tmp6 = obj5;
      obj7 = { name: stateFromStores.username };
    }
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === constants.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    function handleRelationshipAdd(relationship) {
      relationship = relationship.relationship;
      if (relationship.type === constants.FRIEND) {
        handleRelationshipAdd(relationship.user);
      }
    }
    let obj = DispatcherDefault;
    const subscription = obj.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
    };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((link) => {
  let items;
  let items1;
  let obj10;
  let tmp16;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(26);
  link = link.link;
  const tmp4 = closure_11();
  if (cResult[0] !== link) {
    let stringResult;
    if (link.location === metroImportDefault.ADD_FRIENDS_MODAL) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.VUNqoc);
    } else {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.DqE26p);
    }
    cResult[0] = link;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp8 = closure_12(link);
  if (cResult[2] !== link) {
    const channel = link.channel;
    let tmp11 = null;
    if (null != channel) {
      tmp11 = null;
      if (null != GuildStore.getGuild(channel.guild_id)) {
        const obj3 = { guild: GuildStore.getGuild(channel.guild_id), size: GuildIcon.GuildIconSizes.LARGE };
        const tmp14 = GuildIconDefault;
        tmp11 = React4(tmp14, obj3);
      }
    }
    cResult[2] = link;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  closure_13(ToastUtils.presentFriendRequestAcceptedToast);
  if (cResult[4] !== tmp5) {
    const obj4 = { title: tmp5 };
    const tmp18 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
    cResult[4] = tmp5;
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  let plainText;
  if (tmp8 != null) {
    plainText = tmp8.plainText;
  }
  if (cResult[6] === link) {
    if (cResult[7] === tmp4.code) {
      let tmp20;
      if (cResult[8] === plainText) {
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp4.icon) {
          let tmp22;
          if (cResult[12] === tmp4.iconContainer) {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp20) {
            let tmp26;
            let tmp30;
            if (cResult[15] === tmp22) {
              tmp26 = cResult[16];
            }
            if (cResult[17] !== tmp8) {
              let tmp31 = null != tmp8;
              if (tmp31) {
                const obj5 = { variant: "text-md/normal", children: tmp8.visible };
                tmp31 = React4(Text_Text.Text, obj5);
              }
              cResult[17] = tmp8;
              cResult[18] = tmp31;
              tmp30 = tmp31;
            } else {
              tmp30 = cResult[18];
            }
            if (cResult[19] === tmp4.container) {
              if (cResult[20] === tmp26) {
                let tmp33;
                if (cResult[21] === tmp30) {
                  tmp33 = cResult[22];
                }
                if (cResult[23] === tmp16) {
                  let tmp37;
                  if (cResult[24] === tmp33) {
                    tmp37 = cResult[25];
                  }
                  return tmp37;
                }
                const obj6 = { header: tmp16, children: tmp33 };
                const tmp39 = React4(ActionSheet2.ActionSheet, obj6);
                cResult[23] = tmp16;
                cResult[24] = tmp33;
                cResult[25] = tmp39;
                tmp37 = tmp39;
              }
            }
            const obj7 = { style: tmp4.container, children: items };
            items = [tmp26, tmp30];
            const tmp36 = authStore(View, obj7);
            cResult[19] = tmp4.container;
            cResult[20] = tmp26;
            cResult[21] = tmp30;
            cResult[22] = tmp36;
            tmp33 = tmp36;
          }
          const obj8 = { children: items1 };
          items1 = [tmp20, tmp22];
          const tmp29 = authStore(View, obj8);
          cResult[14] = tmp20;
          cResult[15] = tmp22;
          cResult[16] = tmp29;
          tmp26 = tmp29;
        }
      }
      let tmp23 = null != tmp9;
      if (tmp23) {
        const obj9 = { style: tmp4.iconContainer, children: React4(View, obj10) };
        obj10 = { style: tmp4.icon, children: tmp9 };
        tmp23 = React4(View, obj9);
      }
      cResult[10] = tmp9;
      cResult[11] = tmp4.icon;
      cResult[12] = tmp4.iconContainer;
      cResult[13] = tmp23;
      tmp22 = tmp23;
    }
  }
  const obj11 = { text: link, size: 240, style: tmp4.code, accessibilityLabel: plainText };
  const tmp21 = React4(components_native_QRCodeDefault, obj11);
  cResult[6] = link;
  cResult[7] = tmp4.code;
  cResult[8] = plainText;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : ((link) => {
  let items1;
  let obj4;
  let obj7;
  let plainText;
  let stringResult;
  let tmp5;
  link = link.link;
  const tmp = closure_11();
  if (link.location === metroImportDefault.ADD_FRIENDS_MODAL) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t.VUNqoc);
    tmp5 = require;
  } else {
    const intl = intl5.intl;
    stringResult = intl.string(intl5.t.DqE26p);
    tmp5 = require;
  }
  const tmp8 = closure_12(link);
  const channel = link.channel;
  let tmp9 = null;
  if (null != channel) {
    tmp9 = null;
    if (null != GuildStore.getGuild(channel.guild_id)) {
      const obj2 = { guild: GuildStore.getGuild(channel.guild_id), size: tmp5(5971).GuildIconSizes.LARGE };
      const tmp12 = GuildIconDefault;
      tmp9 = React4(tmp12, obj2);
    }
  }
  closure_13(tmp5(4567).presentFriendRequestAcceptedToast);
  const obj3 = { header: React4(tmp5(6644).BottomSheetTitleHeader, { title: stringResult }), children: authStore(View, obj4) };
  const ActionSheet = tmp5(6701).ActionSheet;
  const obj5 = { text: link, size: 240, style: tmp.code, accessibilityLabel: plainText };
  plainText = undefined;
  obj4 = { style: tmp.container, children: items1 };
  const tmp17 = components_native_QRCodeDefault;
  if (tmp8 != null) {
    plainText = tmp8.plainText;
  }
  const items = [React4(tmp17, obj5), ];
  let tmp14Result = null != tmp9;
  if (tmp14Result) {
    const obj6 = { style: tmp.iconContainer, children: React4(View, obj7) };
    obj7 = { style: tmp.icon, children: tmp9 };
    tmp14Result = React4(View, obj6);
  }
  items[1] = tmp14Result;
  items1 = [authStore(View, { children: items }), ];
  let tmp14Result2 = null != tmp8;
  if (tmp14Result2) {
    const obj8 = { variant: "text-md/normal", children: tmp8.visible };
    tmp14Result2 = React4(tmp5(4886).Text, obj8);
  }
  items1[1] = tmp14Result2;
  return React4(ActionSheet, obj3);
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default tmp5;