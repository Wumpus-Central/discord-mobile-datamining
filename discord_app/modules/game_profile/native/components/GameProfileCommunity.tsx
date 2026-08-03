// === Module 8834: GameProfileCommunityServer ===

// Module 8834 (GameProfileCommunityServer)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import preload from "preload";
import { View } from "Text";
import allGuildIds from "allGuildIds";
import jsxProd from "GuildIconSizes";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, headerText: null, card: null, guildBanner: null, guildContent: null, guildIcon: null, guildIconWithBanner: null, guildIconImage: null, guildInfo: null, guildNameDescriptionContainer: null, guildNameRow: null, memberCountsContainer: null, memberCountContainer: null, onlineEllipse: null, membersEllipse: null };
createCacheKey = { gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { height: 112, width: "100%", resizeMode: "cover" };
let obj2 = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { flexDirection: "column", padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
let obj3 = { flexDirection: "column", padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[5] = { width: 56, height: 56, borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: require("Themes").space.PX_4, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginLeft: -require("Themes").space.PX_4 };
let obj4 = { width: 56, height: 56, borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: require("Themes").space.PX_4, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginLeft: -require("Themes").space.PX_4 };
createCacheKey[6] = { marginTop: -require("Themes").space.PX_48 };
let obj5 = { marginTop: -require("Themes").space.PX_48 };
createCacheKey[7] = { width: "100%", height: "100%", borderRadius: require("Themes").radii.none };
let obj6 = { width: "100%", height: "100%", borderRadius: require("Themes").radii.none };
createCacheKey[8] = { flex: 1, gap: require("Themes").space.PX_16 };
let obj7 = { flex: 1, gap: require("Themes").space.PX_16 };
createCacheKey[9] = { gap: require("Themes").space.PX_4 };
let obj8 = { gap: require("Themes").space.PX_4 };
createCacheKey[10] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[11] = { flexDirection: "row", gap: require("Themes").space.PX_16 };
let obj10 = { flexDirection: "row", gap: require("Themes").space.PX_16 };
createCacheKey[12] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[13] = { width: 8, height: 8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.STATUS_POSITIVE };
let obj12 = { width: 8, height: 8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.STATUS_POSITIVE };
createCacheKey[14] = { width: 8, height: 8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj13 = { width: 8, height: 8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.TEXT_DEFAULT };
const result = require("noop").fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const onInviteResolved = game.onInviteResolved;
  const closeModal = game.closeModal;
  let first;
  let React;
  let closure_6;
  let memo;
  let stateFromStores;
  let tmp = createCacheKey();
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
                if (null != outer1_7) {
                  let obj1 = lib(outer2_2[9]);
                  const findCodedLinkResult = obj1.findCodedLink(tmp36.url);
                  if (null != findCodedLinkResult) {
                    if (findCodedLinkResult.type === tmp20(tmp21[10]).CodedLinkType.INVITE) {
                      banned = 1;
                      c3 = 2;
                      c4 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = outer2_1(tmp21[11])(findCodedLinkResult.code, "game_profile");
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
                  outer1_5(invite);
                  const current = outer1_6.current;
                  if (current != null) {
                    current(outer1_1);
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
      const _resolve = tmp;
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
  let obj1 = game(onInviteResolved[12]);
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
      let tmp14Result = null != fromInviteGuildResult.banner;
      if (tmp14Result) {
        const obj2 = { source: null, style: null };
        let obj6 = trackAction(tmp9[20]);
        obj2[0] = obj6.getGuildBannerSource(fromInviteGuildResult);
        obj2[1] = tmp.guildBanner;
        tmp14Result = tmp14(trackAction(tmp9[19]), obj2);
        const tmp17 = trackAction(tmp9[19]);
      }
      const items6 = [tmp14Result, ];
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.guildContent;
      const items7 = [tmp.guildIcon, ];
      let guildIconWithBanner = null;
      if (null != fromInviteGuildResult.banner) {
        guildIconWithBanner = tmp.guildIconWithBanner;
      }
      const obj4 = { style: null, children: null };
      items7[1] = guildIconWithBanner;
      obj4[0] = items7;
      const obj5 = { guild: null, size: null, style: null };
      obj5[0] = fromInviteGuildResult;
      const tmp8Result = tmp8(tmp9[16]);
      obj5[1] = tmp8(tmp9[21]).GuildIconSizes.LARGE;
      obj5[2] = tmp.guildIconImage;
      obj4[1] = stateFromStores(trackAction(tmp9[21]), obj5);
      const items8 = [stateFromStores(closure_6, obj4), , ];
      obj6 = { style: null, children: null };
      obj6[0] = tmp.guildInfo;
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.guildNameDescriptionContainer;
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.guildNameRow;
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      obj9[3] = fromInviteGuildResult.name;
      const items9 = [stateFromStores(tmp8(tmp9[17]).Text, obj9), ];
      const obj10 = { guild: null, size: null };
      obj10[0] = fromInviteGuildResult;
      let tmp20 = trackAction(tmp9[21]);
      obj10[1] = tmp8(tmp9[23]).Icon.Sizes.REFRESH_SMALL_16;
      items9[1] = stateFromStores(trackAction(tmp9[22]), obj10);
      obj8[1] = items9;
      const items10 = [closure_9(closure_6, obj8), ];
      const obj11 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      obj11[3] = fromInviteGuildResult.description;
      items10[1] = stateFromStores(tmp8(tmp9[17]).Text, obj11);
      obj7[1] = items10;
      const items11 = [closure_9(closure_6, obj7), ];
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.memberCountsContainer;
      let tmp12Result = null;
      if (null != approximate_presence_count) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.memberCountContainer;
        const obj14 = { style: null };
        obj14[0] = tmp.onlineEllipse;
        const items12 = [tmp14(tmp13, obj14), ];
        const obj15 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = tmp8(tmp9[18]).intl;
        const obj16 = { membersOnline: null };
        obj16[0] = approximate_presence_count;
        obj15[2] = intl2.formatToPlainString(tmp8(tmp9[18]).t["LC+S+m"], obj16);
        items12[1] = tmp14(tmp8(tmp9[17]).Text, obj15);
        obj13[1] = items12;
        tmp12Result = tmp12(tmp13, obj13);
      }
      const items13 = [tmp12Result, ];
      tmp12Result = null;
      if (null != approximate_member_count) {
        const obj17 = { style: null, children: null };
        obj17[0] = tmp.memberCountContainer;
        const obj18 = { style: null };
        obj18[0] = tmp.membersEllipse;
        const items14 = [tmp14(tmp13, obj18), ];
        const obj19 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = tmp8(tmp9[18]).intl;
        const obj20 = { count: null };
        obj20[0] = approximate_member_count;
        obj19[2] = intl3.formatToPlainString(tmp8(tmp9[18]).t.zRl6XR, obj20);
        items14[1] = tmp14(tmp8(tmp9[17]).Text, obj19);
        obj17[1] = items14;
        tmp12Result = tmp12(tmp13, obj17);
      }
      items13[1] = tmp12Result;
      obj12[1] = items13;
      items11[1] = closure_9(closure_6, obj12);
      obj6[1] = items11;
      items8[1] = closure_9(closure_6, obj6);
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
      items8[2] = stateFromStores(tmp8(tmp9[24]).Button, obj21);
      obj3[1] = items8;
      items6[1] = closure_9(closure_6, obj3);
      obj1[1] = items6;
      items5[1] = closure_9(closure_6, obj1);
      obj[1] = items5;
      return closure_9(closure_6, obj);
    }
  }
  return null;
};