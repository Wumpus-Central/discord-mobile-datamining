// discord_app/modules/game_profile/native/components/GameProfileCommunity.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/GuildMembershipStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, headerText: null, card: null, guildContent: null, guildHeaderRow: null, guildIcon: null, guildIconImage: null, guildInfo: null, guildNameDescriptionContainer: null, guildNameRow: null, memberCountsContainer: null, memberCountContainer: null, onlineEllipse: null, membersEllipse: null };
createCacheKey = { gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_8 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = { borderRadius: ThemesDefault.radii.lg, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { flexDirection: "column", padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
let obj3 = { flexDirection: "column", padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[4] = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
let obj4 = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { width: 56, height: 56, borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: ThemesDefault.space.PX_4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -ThemesDefault.space.PX_4 };
let obj5 = { width: 56, height: 56, borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: ThemesDefault.space.PX_4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -ThemesDefault.space.PX_4 };
createCacheKey[6] = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.none };
let obj6 = { width: "100%", height: "100%", borderRadius: ThemesDefault.radii.none };
createCacheKey[7] = { flex: 1, gap: ThemesDefault.space.PX_16 };
let obj7 = { flex: 1, gap: ThemesDefault.space.PX_16 };
createCacheKey[8] = { gap: ThemesDefault.space.PX_4 };
let obj8 = { gap: ThemesDefault.space.PX_4 };
createCacheKey[9] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[10] = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
let obj10 = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
createCacheKey[11] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[12] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
let obj12 = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE };
createCacheKey[13] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.TEXT_DEFAULT };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj13 = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const onInviteResolved = game.onInviteResolved;
  const closeModal = game.closeModal;
  let first;
  let React;
  closure_6 = undefined;
  let memo;
  let stateFromStores;
  let tmp = callback2();
  let obj = React;
  const tmp2 = first(React.useState(null), 2);
  first = tmp2[0];
  React = tmp2[1];
  closure_6 = React.useRef(onInviteResolved);
  const items = [onInviteResolved];
  const effect = React.useEffect(() => {
    closure_6.current = onInviteResolved;
  }, items);
  let websites;
  if (game != null) {
    websites = game.websites;
  }
  const items1 = [websites];
  memo = React.useMemo(() => {
    let found;
    if (game != null) {
      const websites = game.websites;
      if (websites != null) {
        found = websites.find((category) => category.category === callback(table[8]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    return found;
  }, items1);
  const items2 = [memo];
  const effect1 = obj.useEffect(() => {
    function _resolve() {
      const self = this;
      const tmp = closeModal(function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let invite = tmp3;
                let lib = tmp7;
                lib = undefined;
                invite = undefined;
                let banned;
                if (null != closure_1_7) {
                  obj1 = lib(closure_2_2[9]);
                  const findCodedLinkResult = obj1.findCodedLink(tmp36.url);
                  if (null != findCodedLinkResult) {
                    if (findCodedLinkResult.type === tmp20(tmp21[10]).CodedLinkType.INVITE) {
                      banned = 1;
                      c3 = 2;
                      c4 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = closure_2_1(tmp21[11])(findCodedLinkResult.code, "game_profile");
                      return obj1;
                    }
                  }
                  tmp20 = lib;
                }
              }
            } else {
              if (1 === tmp7) {
                banned = 0;
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                lib = arg1;
                invite = lib.invite;
                banned = lib.banned;
                let tmp10 = null != invite;
                if (tmp10) {
                  tmp10 = true !== banned;
                }
                if (tmp10) {
                  closure_1_5(invite);
                  const current = closure_1_6.current;
                  if (current != null) {
                    current(closure_1_1);
                  }
                }
                banned = 0;
              }
              banned = 0;
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c4 = 3;
          } catch (tmp24) {
            if (tmp4 === banned) {
              c4 = tmp2;
              throw tmp24;
            } else {
              c3 = tmp;
            }
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (null != memo) {
      (function resolve() {
        const self = this;
        const apply = _resolve.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items2);
  obj1 = game(onInviteResolved[12]);
  const items3 = [memo];
  stateFromStores = obj1.useStateFromStores(items3, () => {
    let id;
    if (first != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      isMemberResult = memo.isMember(tmp.guild.id);
    }
    return isMemberResult;
  });
  const items4 = [first, stateFromStores, trackAction, closeModal];
  if (null != first) {
    if (null != first.guild) {
      const fromInviteGuildResult = tmp8(tmp9[16]).fromInviteGuild(first.guild);
      let approximate_member_count = first.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = first.guild.approximate_member_count;
      }
      let approximate_presence_count = first.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = first.guild.approximate_presence_count;
      }
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
      obj[2] = tmp.headerText;
      const intl = tmp8(tmp9[18]).intl;
      obj[3] = intl.string(tmp8(tmp9[18]).t["U2N+ci"]);
      const items5 = [stateFromStores(tmp8(tmp9[17]).Text, obj), ];
      obj1 = { style: null, children: null };
      obj1[0] = tmp.card;
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.guildContent;
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.guildHeaderRow;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.guildIcon;
      const obj5 = { guild: null, size: null, style: null };
      obj5[0] = fromInviteGuildResult;
      const tmp8Result = tmp8(tmp9[16]);
      obj5[1] = tmp8(tmp9[19]).GuildIconSizes.LARGE;
      obj5[2] = tmp.guildIconImage;
      obj4[1] = stateFromStores(trackAction(tmp9[19]), obj5);
      const items6 = [stateFromStores(closure_6, obj4), ];
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.guildInfo;
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.guildNameDescriptionContainer;
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.guildNameRow;
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      obj9[3] = fromInviteGuildResult.name;
      const items7 = [stateFromStores(tmp8(tmp9[17]).Text, obj9), ];
      const obj10 = { guild: null, size: null };
      obj10[0] = fromInviteGuildResult;
      const tmp16 = trackAction(tmp9[19]);
      obj10[1] = tmp8(tmp9[21]).Icon.Sizes.REFRESH_SMALL_16;
      items7[1] = stateFromStores(trackAction(tmp9[20]), obj10);
      obj8[1] = items7;
      const items8 = [callback(closure_6, obj8), ];
      const obj11 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: null };
      obj11[3] = fromInviteGuildResult.description;
      items8[1] = stateFromStores(tmp8(tmp9[17]).Text, obj11);
      obj7[1] = items8;
      const items9 = [callback(closure_6, obj7), ];
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.memberCountsContainer;
      let tmp12Result = null;
      if (null != approximate_presence_count) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.memberCountContainer;
        const obj14 = { style: null };
        obj14[0] = tmp.onlineEllipse;
        const items10 = [tmp14(tmp13, obj14), ];
        const obj15 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = tmp8(tmp9[18]).intl;
        const obj16 = { membersOnline: null };
        obj16[0] = approximate_presence_count;
        obj15[2] = intl2.formatToPlainString(tmp8(tmp9[18]).t["LC+S+m"], obj16);
        items10[1] = tmp14(tmp8(tmp9[17]).Text, obj15);
        obj13[1] = items10;
        tmp12Result = tmp12(tmp13, obj13);
      }
      const items11 = [tmp12Result, ];
      tmp12Result = null;
      if (null != approximate_member_count) {
        const obj17 = { style: null, children: null };
        obj17[0] = tmp.memberCountContainer;
        const obj18 = { style: null };
        obj18[0] = tmp.membersEllipse;
        const items12 = [tmp14(tmp13, obj18), ];
        const obj19 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = tmp8(tmp9[18]).intl;
        const obj20 = { count: null };
        obj20[0] = approximate_member_count;
        obj19[2] = intl3.formatToPlainString(tmp8(tmp9[18]).t.zRl6XR, obj20);
        items12[1] = tmp14(tmp8(tmp9[17]).Text, obj19);
        obj17[1] = items12;
        tmp12Result = tmp12(tmp13, obj17);
      }
      items11[1] = tmp12Result;
      obj12[1] = items11;
      items9[1] = callback(closure_6, obj12);
      obj6[1] = items9;
      items6[1] = callback(closure_6, obj6);
      obj3[1] = items6;
      const items13 = [callback(closure_6, obj3), ];
      const intl4 = tmp8(tmp9[18]).intl;
      const string = intl4.string;
      const t = tmp8(tmp9[18]).t;
      if (stateFromStores) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj21 = { variant: "secondary", size: "md", text: null, onPress: null };
      obj21[2] = stringResult;
      obj21[3] = tmp11;
      items13[1] = stateFromStores(tmp8(tmp9[22]).Button, obj21);
      obj2[1] = items13;
      obj1[1] = callback(closure_6, obj2);
      items5[1] = stateFromStores(closure_6, obj1);
      obj[1] = items5;
      return callback(closure_6, obj);
    }
  }
  return null;
};