// === Module 5887: MemberVerificationGuildHeader ===

// Module 5887 (MemberVerificationGuildHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MemberVerificationFormConstants = fn(5878);
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
const useBannerHeight = MemberVerificationFormConstants.useBannerHeight;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 1.20225424859375;
const createStyles = fn(4829);
let obj2 = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: null, avatarContainer: null, featureIcon: null, headerTitle: null, headerDescription: null };
let size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.avatar = size;
const size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.avatarContainer = size1;
obj2.featureIcon = { position: "absolute", top: 56, right: -8 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData2 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
const __initData3 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(hasManualFormFields) {
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  importDefault = undefined;
  let top;
  let derivedValue;
  const tmp = closure_9();
  if (null != guild.banner) {
    let guildBannerSource = require("AvatarUtils").getGuildBannerSource(guild);
    let tmp3 = top;
    let tmp5 = importDefault;
    let obj = require("AvatarUtils");
  } else {
    tmp3 = top;
    guildBannerSource = require("module_5888");
    tmp5 = importDefault;
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp3[8])().top;
  class N {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  N.__closure = { scrollTop };
  N.__workletHash = 6997429707371;
  N.__initData = __initData;
  derivedValue = scrollTop(tmp3[9]).useDerivedValue(N);
  let obj2 = scrollTop(tmp3[9]);
  class I {
    constructor() {
      size = { width: "100%", height: closure_1, opacity: null, transform: null };
      obj2 = closure_0(closure_2[9]);
      items = [0];
      items[1] = closure_1 - top;
      size.opacity = obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp");
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[9]);
      items1 = [0];
      items1[1] = closure_1;
      items2 = [0];
      items2[1] = -closure_1;
      obj1.translateY = obj4.interpolate(closure_3.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj1;
      obj7 = { scale: null };
      obj6 = closure_0(closure_2[9]);
      items4 = [0];
      items4[1] = closure_1;
      obj7.scale = obj6.interpolate(closure_3.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj7;
      size.transform = items3;
      return size;
    }
  }
  let obj3 = scrollTop(tmp3[9]);
  I.__closure = { height: tmp8, interpolate: scrollTop(tmp3[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  I.__workletHash = 15738371977789;
  I.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(I);
  let obj4 = { height: tmp8, interpolate: scrollTop(tmp3[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  const fn = function b() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, closure_1];
    const items1 = [0, -closure_1 / c8];
    obj2.translateY = ReanimatedRexport.interpolate(derivedValue.get(), items, items1, "clamp");
    const items2 = [obj2, ];
    const obj4 = { scale: null };
    const items3 = [0, AVATAR_SIZE];
    const items4 = [1, c8];
    obj4.scale = ReanimatedRexport.interpolate(derivedValue.get(), items3, items4, "clamp");
    items2[1] = obj4;
    obj.transform = items2;
    return obj;
  };
  const obj5 = scrollTop(tmp3[9]);
  fn.__closure = { interpolate: scrollTop(tmp3[9]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  fn.__workletHash = 62412230968;
  fn.__initData = __initData3;
  const obj7 = { style: tmp.header, children: null };
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj8 = { style: animatedStyle, children: null };
  let items = [closure_6(tmp5(tmp3[9]).Image, { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource }), closure_6(tmp5(tmp3[10]), { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] })];
  obj8.children = items;
  let items1 = [closure_7(tmp5(tmp3[9]).View, obj8), ];
  const obj11 = { style: tmp.headerContent, children: null };
  const obj12 = { style: null, children: null };
  let items2 = [tmp.avatarContainer, animatedStyle1];
  obj12.style = items2;
  const obj13 = { style: tmp.avatar, guild, size: null, animate: true };
  const obj10 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
  const obj6 = { interpolate: scrollTop(tmp3[9]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  const obj9 = { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource };
  obj13.size = scrollTop(tmp3[11]).GuildIconSizes.XLARGE;
  let items3 = [closure_6(tmp5(tmp3[11]), obj13), closure_6(tmp5(tmp3[12]), { style: tmp.featureIcon, guild, disableColor: true })];
  obj12.children = items3;
  let items4 = [closure_7(tmp5(tmp3[9]).View, obj12), , ];
  const obj15 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = scrollTop(tmp3[14]).intl;
  const format = intl.format;
  const t = scrollTop(tmp3[14]).t;
  if (hasManualFormFields) {
    const obj16 = { guildName: guild.name };
    let formatResult = format(t.cgX47Z, obj16);
  } else {
    const obj17 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj17);
  }
  obj15.children = formatResult;
  items4[1] = closure_6(scrollTop(tmp3[13]).Heading, obj15);
  const obj18 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = scrollTop(tmp3[14]).intl;
  const string = intl2.string;
  const t2 = scrollTop(tmp3[14]).t;
  if (hasManualFormFields) {
    let stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  obj18.children = stringResult;
  items4[2] = closure_6(scrollTop(tmp3[13]).Text, obj18);
  obj11.children = items4;
  items1[1] = closure_7(derivedValue, obj11);
  obj7.children = items1;
  return closure_7(derivedValue, obj7);
};