// === Module 8732: InstantInviteQRCodeActionSheet ===

// Module 8732 (InstantInviteQRCodeActionSheet)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import Text_Text from "Text/Text" /* 5088 */;
import GuildIcon from "GuildIcon" /* 6158 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import ActionSheet from "ActionSheet" /* 6898 */;
import components_native_QRCodeDefault from "components_native/QRCode" /* 8733 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ InstantInviteSources: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { padding: nativeDefault.space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_24 }, iconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, icon: null, code: null };
let obj3 = { padding: nativeDefault.space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_24 };
obj2.icon = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.WHITE };
obj2.code = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDescription(channel) {
  const cResult = c.c(11);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (null != channel) {
    if (cResult[2] !== channel.guild_id) {
      const _Symbol = Symbol;
      let forResult = Symbol.for("react.early_return_sentinel");
      guild = GuildStore.getGuild(channel.guild_id);
      if (null != guild) {
        const obj2 = { visible: null, plainText: null };
        const intl3 = util.intl;
        const obj3 = { name: guild.name };
        obj2.visible = intl3.format(util.t.VK3zyF, obj3);
        const intl4 = util.intl;
        const obj4 = { name: guild.name };
        obj2.plainText = intl4.formatToPlainString(util.t.VK3zyF, obj4);
        forResult = obj2;
      }
      cResult[2] = channel.guild_id;
      cResult[3] = forResult;
      let tmp8 = forResult;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (tmp8 !== Symbol.for("react.early_return_sentinel")) {
      return tmp8;
    }
  }
  let tmp12 = null;
  if (channel.location === constants.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      if (cResult[4] !== stateFromStores.username) {
        const intl = util.intl;
        const obj5 = { name: stateFromStores.username };
        const formatResult = intl.format(util.t.zDGAfl, obj5);
        cResult[4] = stateFromStores.username;
        cResult[5] = formatResult;
        let tmp13 = formatResult;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== stateFromStores.username) {
        const intl2 = util.intl;
        const obj6 = { name: stateFromStores.username };
        const formatToPlainStringResult = intl2.formatToPlainString(util.t.zDGAfl, obj6);
        cResult[6] = stateFromStores.username;
        cResult[7] = formatToPlainStringResult;
        let tmp15 = formatToPlainStringResult;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp13) {
      }
      const obj7 = { visible: tmp13, plainText: tmp15 };
      cResult[8] = tmp13;
      cResult[9] = tmp15;
      cResult[10] = obj7;
    }
  }
  return tmp12;
}) : (function useDescription(channel) {
  channel = channel.channel;
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      const obj2 = { visible: null, plainText: null };
      const intl3 = util.intl;
      const obj3 = { name: guild.name };
      obj2.visible = intl3.format(util.t.VK3zyF, obj3);
      const intl4 = util.intl;
      const obj4 = { name: guild.name };
      obj2.plainText = intl4.formatToPlainString(util.t.VK3zyF, obj4);
      return obj2;
    }
  }
  let tmp6 = null;
  if (channel.location === constants.ADD_FRIENDS_MODAL) {
    tmp6 = null;
    if (null != stateFromStores) {
      const obj5 = { visible: null, plainText: null };
      const intl = util.intl;
      const obj6 = { name: stateFromStores.username };
      obj5.visible = intl.format(util.t.zDGAfl, obj6);
      const intl2 = util.intl;
      const obj7 = { name: stateFromStores.username };
      obj5.plainText = intl2.formatToPlainString(util.t.zDGAfl, obj7);
      tmp6 = obj5;
    }
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnFriendAdded(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === constants.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const subscription = DispatcherDefault.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        DispatcherDefault.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useOnFriendAdded(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function handleRelationshipAdd(relationship) {
      relationship = relationship.relationship;
      if (relationship.type === constants.FRIEND) {
        handleRelationshipAdd(relationship.user);
      }
    }
    const subscription = DispatcherDefault.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
    return () => {
      DispatcherDefault.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
    };
  }, items);
});
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InstantInviteQRCodeActionSheet(link) {
  const cResult = c.c(26);
  link = link.link;
  const tmp4 = closure_11();
  if (cResult[0] !== link) {
    if (link.location === constants.ADD_FRIENDS_MODAL) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.VUNqoc);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.DqE26p);
    }
    cResult[0] = link;
    cResult[1] = stringResult;
  } else {
    const tmp10 = closure_12(link);
    if (cResult[2] !== link) {
      const channel = link.channel;
      let tmp13 = null;
      if (null != channel) {
        tmp13 = null;
        if (null != GuildStore.getGuild(channel.guild_id)) {
          const obj3 = { guild: GuildStore.getGuild(channel.guild_id), size: GuildIcon.GuildIconSizes.LARGE };
          tmp13 = options(GuildIconDefault, obj3);
        }
      }
      cResult[2] = link;
      cResult[3] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[3];
    }
    closure_13(ToastUtils.presentFriendRequestAcceptedToast);
    if (cResult[4] !== cResult[1]) {
      const obj4 = { title: tmp5 };
      const tmp21 = options(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
      cResult[4] = tmp5;
      cResult[5] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[5];
    }
    let plainText;
    if (tmp10 != null) {
      plainText = tmp10.plainText;
    }
    if (cResult[6] === link) {
      if (cResult[7] === tmp4.code) {
        if (cResult[8] === plainText) {
          let tmp24 = cResult[9];
        }
        if (cResult[10] === tmp11) {
          if (cResult[11] === tmp4.icon) {
            if (cResult[12] === tmp4.iconContainer) {
              let tmp28 = cResult[13];
            }
            if (cResult[14] === tmp24) {
              if (cResult[15] === tmp28) {
                let tmp32 = cResult[16];
              }
              if (cResult[17] !== tmp10) {
                let tmp37 = null != tmp10;
                if (tmp37) {
                  const obj5 = { variant: "text-md/normal", children: tmp10.visible };
                  tmp37 = options(Text_Text.Text, obj5);
                }
                cResult[17] = tmp10;
                cResult[18] = tmp37;
                let tmp36 = tmp37;
              } else {
                tmp36 = cResult[18];
              }
              if (cResult[19] === tmp4.container) {
                if (cResult[20] === tmp32) {
                  if (cResult[21] === tmp36) {
                    let tmp39 = cResult[22];
                  }
                  if (cResult[23] === tmp19) {
                    if (cResult[24] === tmp39) {
                      let tmp43 = cResult[25];
                    }
                    return tmp43;
                  }
                  const obj6 = { header: tmp19, children: tmp39 };
                  const tmp45 = options(ActionSheet.ActionSheet, obj6);
                  cResult[23] = tmp19;
                  cResult[24] = tmp39;
                  cResult[25] = tmp45;
                  tmp43 = tmp45;
                }
              }
              const obj7 = { style: tmp4.container, children: null };
              const items = [tmp32, tmp36];
              obj7.children = items;
              const tmp42 = collapsed(View, obj7);
              cResult[19] = tmp4.container;
              cResult[20] = tmp32;
              cResult[21] = tmp36;
              cResult[22] = tmp42;
              tmp39 = tmp42;
            }
            const obj8 = { children: null };
            const items1 = [tmp24, tmp28];
            obj8.children = items1;
            const tmp35 = collapsed(View, obj8);
            cResult[14] = tmp24;
            cResult[15] = tmp28;
            cResult[16] = tmp35;
            tmp32 = tmp35;
          }
        }
        let tmp29 = null != tmp11;
        if (tmp29) {
          const obj9 = { style: tmp4.iconContainer, children: null };
          const obj10 = { style: tmp4.icon, children: tmp11 };
          obj9.children = options(View, obj10);
          tmp29 = options(View, obj9);
        }
        cResult[10] = tmp11;
        cResult[11] = tmp4.icon;
        cResult[12] = tmp4.iconContainer;
        cResult[13] = tmp29;
        tmp28 = tmp29;
      }
    }
    const obj11 = { text: link, size: 240, style: tmp4.code, accessibilityLabel: plainText };
    const tmp27 = options(components_native_QRCodeDefault, obj11);
    cResult[6] = link;
    cResult[7] = tmp4.code;
    cResult[8] = plainText;
    cResult[9] = tmp27;
    tmp24 = tmp27;
  }
}) : (function InstantInviteQRCodeActionSheet(location) {
  const tmp = closure_11();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.VUNqoc);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.DqE26p);
    tmp5 = require;
  }
  const tmp8 = closure_12(location);
  const channel = location.channel;
  let tmp9 = null;
  if (null != channel) {
    tmp9 = null;
    if (null != GuildStore.getGuild(channel.guild_id)) {
      const obj2 = { guild: GuildStore.getGuild(channel.guild_id), size: tmp5(6158).GuildIconSizes.LARGE };
      tmp9 = options(GuildIconDefault, obj2);
    }
  }
  closure_13(tmp5(4808).presentFriendRequestAcceptedToast);
  const obj3 = { header: options(tmp5(6838).BottomSheetTitleHeader, { title: stringResult }), children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { text: location.link, size: 240, style: tmp.code, accessibilityLabel: null };
  let plainText;
  if (tmp8 != null) {
    plainText = tmp8.plainText;
  }
  obj5.accessibilityLabel = plainText;
  const items = [options(components_native_QRCodeDefault, obj5), ];
  let tmp14Result = null != tmp9;
  if (tmp14Result) {
    const obj6 = { style: tmp.iconContainer, children: null };
    const obj7 = { style: tmp.icon, children: tmp9 };
    obj6.children = options(View, obj7);
    tmp14Result = options(View, obj6);
  }
  items[1] = tmp14Result;
  const items1 = [collapsed(View, { children: items }), ];
  let tmp14Result2 = null != tmp8;
  if (tmp14Result2) {
    const obj8 = { variant: "text-md/normal", children: tmp8.visible };
    tmp14Result2 = options(tmp5(5088).Text, obj8);
  }
  items1[1] = tmp14Result2;
  obj4.children = items1;
  obj3.children = collapsed(View, obj4);
  return options(tmp5(6898).ActionSheet, obj3);
});