// === Module 7719: MemberVerificationGuildHeader ===

// Module 7719 (MemberVerificationGuildHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _mod1655 from "module_1655" /* 1655 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import GuildIcon from "GuildIcon" /* 7720 */;
import GuildBadgeDefault from "GuildBadge" /* 7723 */;
import noop from "module_19" /* 19 */;

const _modDef1655 = _mod1655;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(7708);
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
({ useBannerHeight: hasOwnProperty, SHEET_RADIUS } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj2 = { header: { alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48 + SHEET_RADIUS, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: null, avatarContainer: null, featureIcon: null, headerTitle: null, headerDescription: null };
let size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.avatar = size;
const size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.avatarContainer = size1;
obj2.featureIcon = { position: "absolute", top: 56, right: -8 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function MemberVerificationGuildHeaderTsx1(){let[scrollTop]=this.__closure;return scrollTop.get()*-1;})" };
let closure_10 = { code: "(function MemberVerificationGuildHeaderTsx2(){let[height,interpolate,scrollTop,safeAreaTop,scrollTopNegative]=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};})" };
let closure_11 = { code: "(function MemberVerificationGuildHeaderTsx3(){let[scrollTop]=this.__closure;return scrollTop.get()*-1;})" };
let closure_12 = { code: "(function MemberVerificationGuildHeaderTsx4(){let[interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE]=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};})" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(scrollTop) {
  ({ guild, hasManualFormFields } = scrollTop);
  const tmp = closure_8();
  const tmp2 = hasOwnProperty();
  items = [closure_11, scrollTop.scrollTop];
  c0 = undefined;
  [tmp5, tmp6] = items;
  class MemberVerificationGuildHeaderTsx3 {
    constructor() {
      return -1 * closure_0.get();
    }
  }
  let items1 = [tmp6];
  MemberVerificationGuildHeaderTsx3.__closure = items1;
  MemberVerificationGuildHeaderTsx3.__workletHash = 12898463786096;
  MemberVerificationGuildHeaderTsx3.__initData = tmp5;
  const derivedValue = _mod1655.useDerivedValue(MemberVerificationGuildHeaderTsx3);
  let items2 = [closure_12, _mod1655.interpolate, derivedValue, tmp2, 1.20225424859375, AVATAR_SIZE];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class MemberVerificationGuildHeaderTsx4 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = closure_2;
      items1 = [0];
      items1[1] = -closure_2 / closure_3;
      obj1.translateY = closure_0(closure_1.get(), items, items1, "clamp");
      items2 = [, ];
      items2[0] = obj1;
      obj4 = { scale: null };
      items3 = [0];
      items3[1] = closure_4;
      items4 = [1];
      items4[1] = closure_3;
      obj4.scale = closure_0(closure_1.get(), items3, items4, "clamp");
      items2[1] = obj4;
      obj.transform = items2;
      return obj;
    }
  }
  let items3 = [tmp9, tmp10, tmp11, tmp12, tmp13];
  MemberVerificationGuildHeaderTsx4.__closure = items3;
  MemberVerificationGuildHeaderTsx4.__workletHash = 3125659462790;
  MemberVerificationGuildHeaderTsx4.__initData = tmp8;
  let obj2 = { style: tmp.header, children: null };
  let obj3 = { style: tmp.headerContent, children: null };
  const animatedStyle = _mod1655.useAnimatedStyle(MemberVerificationGuildHeaderTsx4);
  const obj4 = { style: null, children: null };
  let items4 = [tmp.avatarContainer, animatedStyle];
  obj4.style = items4;
  const obj5 = { style: tmp.avatar, guild, size: null, animate: true };
  const tmp3Result = _mod1655;
  obj5.size = GuildIcon.GuildIconSizes.XLARGE;
  const items5 = [timestampProducer(GuildIconDefault, obj5), timestampProducer(GuildBadgeDefault, { style: tmp.featureIcon, guild, disableColor: true })];
  obj4.children = items5;
  const items6 = [metroImportDefault(_modDef1655.View, obj4), , ];
  const obj7 = { style: tmp.headerTitle, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  const format = intl.format;
  const t = util.t;
  if (hasManualFormFields) {
    const obj8 = { guildName: guild.name };
    let formatResult = format(t.cgX47Z, obj8);
  } else {
    const obj9 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj9);
  }
  obj7.children = formatResult;
  items6[1] = timestampProducer(Text_Text.Heading, obj7);
  const obj10 = { style: tmp.headerDescription, variant: "body-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t2 = util.t;
  if (hasManualFormFields) {
    let stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  obj10.children = stringResult;
  items6[2] = timestampProducer(Text_Text.Text, obj10);
  obj3.children = items6;
  obj2.children = metroImportDefault(View, obj3);
  return timestampProducer(View, obj2);
};
export function MemberVerificationGuildBanner(arg0) {
  ({ guild, scrollTop } = arg0);
  const tmp2 = hasOwnProperty();
  const tmp = closure_8();
  items = [closure_9, scrollTop];
  c0 = undefined;
  [tmp6, tmp7] = items;
  class MemberVerificationGuildHeaderTsx1 {
    constructor() {
      return -1 * closure_0.get();
    }
  }
  let items1 = [tmp7];
  MemberVerificationGuildHeaderTsx1.__closure = items1;
  MemberVerificationGuildHeaderTsx1.__workletHash = 246931836658;
  MemberVerificationGuildHeaderTsx1.__initData = tmp6;
  const derivedValue = _mod1655.useDerivedValue(MemberVerificationGuildHeaderTsx1);
  _mod1655;
  let items2 = [closure_10, tmp2, _mod1655.interpolate, scrollTop, useSafeAreaInsetsDefault().top, derivedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class MemberVerificationGuildHeaderTsx2 {
    constructor() {
      size = { width: "100%", height: closure_0, opacity: null, transform: null };
      items = [0];
      items[1] = closure_0 - closure_3;
      size.opacity = closure_1(closure_2.get(), items, [1, 0], "clamp");
      obj1 = { translateY: null };
      items1 = [0];
      items1[1] = closure_0;
      items2 = [0];
      items2[1] = -closure_0;
      obj1.translateY = closure_1(closure_4.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj1;
      obj4 = { scale: null };
      items4 = [0];
      items4[1] = closure_0;
      obj4.scale = closure_1(closure_4.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj4;
      size.transform = items3;
      return size;
    }
  }
  let items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  MemberVerificationGuildHeaderTsx2.__closure = items3;
  MemberVerificationGuildHeaderTsx2.__workletHash = 15981102036772;
  MemberVerificationGuildHeaderTsx2.__initData = tmp10;
  if (null == guild.banner) {
    let obj2 = { style: null };
    const obj3 = { height: tmp2 };
    obj2.style = obj3;
    let tmp19 = timestampProducer(View, obj2);
  } else {
    const obj4 = { style: tmp16, children: null };
    const obj5 = { style: null, resizeMode: "cover", source: null };
    let size = { width: "100%", height: tmp2 };
    obj5.style = size;
    const tmp3Result = FastImageDefault;
    obj5.source = AvatarUtilsDefault.getGuildBannerSource(guild);
    let items4 = [timestampProducer(tmp3Result, obj5), ];
    const obj6 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
    items4[1] = timestampProducer(LinearGradientDefault, obj6);
    class MemberVerificationGuildHeaderTsx1 {
      constructor() {
        return -1 * closure_0.get();
      }
    }
    tmp19 = metroImportDefault(_modDef1655.View, obj4);
    const tmp3Result2 = AvatarUtilsDefault;
  }
  return tmp19;
}