// === Module 8736: GameProfileCommunity ===

// Module 8736 (GameProfileCommunity)
import nativeDefault from "native" /* 576 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8738 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 1959 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerText: null, card: null, guildContent: null, guildHeaderRow: null, guildIcon: null, guildIconImage: null, guildInfo: null, guildNameDescriptionContainer: null, guildNameRow: null, memberCountsContainer: null, memberCountContainer: null, onlineEllipse: null, membersEllipse: null };
createStyles = { gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.card = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.guildContent = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj3 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.guildHeaderRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -nativeDefault.space.PX_4 };
createStyles.guildIcon = size;
const size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
createStyles.guildIconImage = size1;
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
createStyles.guildInfo = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_16 };
createStyles.guildNameDescriptionContainer = { gap: nativeDefault.space.PX_4 };
let obj6 = { gap: nativeDefault.space.PX_4 };
createStyles.guildNameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.memberCountsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
createStyles.memberCountContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles.onlineEllipse = size2;
const size3 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles.membersEllipse = size3;
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const onInviteResolved = game.onInviteResolved;
  const closeModal = game.closeModal;
  let first;
  noop = undefined;
  let memo;
  let stateFromStores;
  const tmp = closure_10();
  let obj = noop;
  const tmp2 = first(noop.useState(null), 2);
  first = tmp2[0];
  noop = tmp2[1];
  closure_6 = noop.useRef(onInviteResolved);
  const items = [onInviteResolved];
  const effect = noop.useEffect(() => {
    closure_6.current = onInviteResolved;
  }, items);
  let websites;
  if (game != null) {
    websites = game.websites;
  }
  const items1 = [websites];
  memo = noop.useMemo(() => {
    let found;
    if (game != null) {
      const websites = game.websites;
      if (websites != null) {
        found = websites.find((category) => category.category === game(onInviteResolved[8]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    return found;
  }, items1);
  const items2 = [memo];
  const effect1 = obj.useEffect(() => {
    closure_0 = async function _resolve() {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              let invite;
              let banned;
              if (null != memo) {
                let obj1 = game(dependencyMap[9]);
                const findCodedLinkResult = obj1.findCodedLink(tmp35.url);
                if (null != findCodedLinkResult) {
                  if (findCodedLinkResult.type === game(dependencyMap[10]).CodedLinkType.INVITE) {
                    c2 = 1;
                    c3 = 2;
                    c4 = 1;
                    obj1 = { value: trackAction(dependencyMap[11])(findCodedLinkResult.code, "game_profile"), done: false };
                    return obj1;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              invite = closure_128_0.invite;
              banned = closure_128_0.banned;
              let tmp10 = null != invite;
              if (tmp10) {
                tmp10 = true !== banned;
              }
              if (tmp10) {
                closure_1_5(invite);
                const current = ref.current;
                if (current != null) {
                  current(invite);
                }
              }
              c2 = 0;
            }
            c2 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c4 = 3;
        } catch (tmp24) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c3 = tmp;
          }
        }
      }
    };
    if (null != memo) {
      (function resolve() {
        const self = this;
        const apply = closure_0.apply;
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
      const guild = first.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      isMemberResult = GuildMembershipStore.isMember(first.guild.id);
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
      obj = { style: tmp.container, children: null };
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
      const intl = tmp8(tmp9[18]).intl;
      obj.children = intl.string(tmp8(tmp9[18]).t["U2N+ci"]);
      const items5 = [stateFromStores(tmp8(tmp9[17]).Text, obj), ];
      obj1 = { style: tmp.card, children: null };
      const obj2 = { style: tmp.guildContent, children: null };
      const obj3 = { style: tmp.guildHeaderRow, children: null };
      const obj4 = { style: tmp.guildIcon, children: null };
      const obj5 = { guild: fromInviteGuildResult, size: null, style: null };
      const tmp8Result = tmp8(tmp9[16]);
      obj5.size = tmp8(tmp9[19]).GuildIconSizes.LARGE;
      obj5.style = tmp.guildIconImage;
      obj4.children = stateFromStores(trackAction(tmp9[19]), obj5);
      const items6 = [stateFromStores(closure_6, obj4), ];
      const obj6 = { style: tmp.guildInfo, children: null };
      const obj7 = { style: tmp.guildNameDescriptionContainer, children: null };
      const obj8 = { style: tmp.guildNameRow, children: null };
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: fromInviteGuildResult.name };
      const items7 = [stateFromStores(tmp8(tmp9[17]).Text, obj9), ];
      const obj10 = { guild: fromInviteGuildResult, size: null };
      const tmp16 = trackAction(tmp9[19]);
      obj10.size = tmp8(tmp9[21]).Icon.Sizes.REFRESH_SMALL_16;
      items7[1] = stateFromStores(trackAction(tmp9[20]), obj10);
      obj8.children = items7;
      const items8 = [closure_9(closure_6, obj8), ];
      const obj11 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: fromInviteGuildResult.description };
      items8[1] = stateFromStores(tmp8(tmp9[17]).Text, obj11);
      obj7.children = items8;
      const items9 = [closure_9(closure_6, obj7), ];
      const obj12 = { style: tmp.memberCountsContainer, children: null };
      let tmp12Result = null;
      if (null != approximate_presence_count) {
        const obj13 = { style: tmp.memberCountContainer, children: null };
        const obj14 = { style: tmp.onlineEllipse };
        const items10 = [tmp14(tmp13, obj14), ];
        const obj15 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = tmp8(tmp9[18]).intl;
        const obj16 = { membersOnline: approximate_presence_count };
        obj15.children = intl2.formatToPlainString(tmp8(tmp9[18]).t["LC+S+m"], obj16);
        items10[1] = tmp14(tmp8(tmp9[17]).Text, obj15);
        obj13.children = items10;
        tmp12Result = closure_9(tmp13, obj13);
      }
      const items11 = [tmp12Result, ];
      tmp12Result = null;
      if (null != approximate_member_count) {
        const obj17 = { style: tmp.memberCountContainer, children: null };
        const obj18 = { style: tmp.membersEllipse };
        const items12 = [tmp14(tmp13, obj18), ];
        const obj19 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = tmp8(tmp9[18]).intl;
        const obj20 = { count: approximate_member_count };
        obj19.children = intl3.formatToPlainString(tmp8(tmp9[18]).t.zRl6XR, obj20);
        items12[1] = tmp14(tmp8(tmp9[17]).Text, obj19);
        obj17.children = items12;
        tmp12Result = closure_9(tmp13, obj17);
      }
      items11[1] = tmp12Result;
      obj12.children = items11;
      items9[1] = closure_9(closure_6, obj12);
      obj6.children = items9;
      items6[1] = closure_9(closure_6, obj6);
      obj3.children = items6;
      const items13 = [closure_9(closure_6, obj3), ];
      const intl4 = tmp8(tmp9[18]).intl;
      const string = intl4.string;
      const t = tmp8(tmp9[18]).t;
      if (stateFromStores) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj21 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp11 };
      items13[1] = stateFromStores(tmp8(tmp9[22]).Button, obj21);
      obj2.children = items13;
      obj1.children = closure_9(closure_6, obj2);
      items5[1] = stateFromStores(closure_6, obj1);
      obj.children = items5;
      return closure_9(closure_6, obj);
    }
  }
  return null;
};