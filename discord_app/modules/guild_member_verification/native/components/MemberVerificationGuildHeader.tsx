// discord_app/modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import BANNER_RATIO_HEIGHT_16_9 from "MemberVerificationFormConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = BANNER_RATIO_HEIGHT_16_9);
const useBannerHeight = BANNER_RATIO_HEIGHT_16_9.useBannerHeight;
({ jsx: closure_6, jsxs: error } = jsxProd);
let c8 = 1.20225424859375;
createCacheKey = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: null, avatarContainer: null, featureIcon: null, headerTitle: null, headerDescription: null };
createCacheKey = { borderRadius: ThemesDefault.radii.lg, borderWidth: 0, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[5] = { position: "absolute", top: 56, right: -8 };
createCacheKey[6] = { textAlign: "center", marginBottom: 8 };
createCacheKey[7] = { lineHeight: 18, textAlign: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
let closure_11 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
let closure_12 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
let obj1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(hasManualFormFields) {
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  importDefault = undefined;
  let top;
  let derivedValue;
  const tmp = callback3();
  if (null != guild.banner) {
    let obj = importDefault(top[6]);
    let guildBannerSource = obj.getGuildBannerSource(guild);
    let tmp3 = top;
    let tmp5 = importDefault;
  } else {
    tmp3 = top;
    guildBannerSource = importDefault(top[7]);
    tmp5 = importDefault;
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp3[8])().top;
  obj1 = scrollTop(tmp3[9]);
  class N {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  N.__closure = { scrollTop };
  N.__workletHash = 6997429707371;
  N.__initData = closure_10;
  derivedValue = obj1.useDerivedValue(N);
  let obj2 = scrollTop(tmp3[9]);
  class I {
    constructor() {
      obj = { width: "100%", height: closure_1, opacity: null, transform: null };
      obj2 = scrollTop(top[9]);
      items = [0];
      items[1] = closure_1 - top;
      obj[2] = obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp");
      obj = { translateY: null };
      obj4 = scrollTop(top[9]);
      items1 = [0];
      items1[1] = closure_1;
      items2 = [0];
      items2[1] = -closure_1;
      obj[0] = obj4.interpolate(closure_3.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj;
      obj1 = { scale: null };
      obj6 = scrollTop(top[9]);
      items4 = [0];
      items4[1] = closure_1;
      obj1[0] = obj6.interpolate(closure_3.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj1;
      obj[3] = items3;
      return obj;
    }
  }
  obj = { height: tmp8, interpolate: scrollTop(tmp3[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  I.__closure = obj;
  I.__workletHash = 15738371977789;
  I.__initData = closure_11;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj4 = scrollTop(tmp3[9]);
  const fn = function b() {
    let obj = { transform: null };
    obj = { translateY: scrollTop(top[9]).interpolate(derivedValue.get(), items, items1, "clamp") };
    items = [0, closure_1];
    items1 = [0, -closure_1 / closure_1_8];
    const items2 = [obj, ];
    obj = { scale: null };
    const obj3 = scrollTop(top[9]);
    const items3 = [0, closure_1_4];
    const items4 = [1, closure_1_8];
    obj[0] = scrollTop(top[9]).interpolate(derivedValue.get(), items3, items4, "clamp");
    items2[1] = obj;
    obj[0] = items2;
    return obj;
  };
  obj = { interpolate: scrollTop(tmp3[9]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO: c8, AVATAR_SIZE };
  fn.__closure = obj;
  fn.__workletHash = 62412230968;
  fn.__initData = closure_12;
  obj1 = { style: tmp.header, children: null };
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj2 = { style: animatedStyle, children: null };
  let items = [callback(tmp5(tmp3[9]).Image, { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource }), callback(tmp5(tmp3[10]), { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] })];
  obj2[1] = items;
  let items1 = [callback2(tmp5(tmp3[9]).View, obj2), ];
  obj4 = { style: tmp.headerContent, children: null };
  const obj5 = { style: items2, children: null };
  items2 = [tmp.avatarContainer, animatedStyle1];
  const obj6 = { style: tmp.avatar, guild, size: scrollTop(tmp3[11]).GuildIconSizes.XLARGE, animate: true };
  let items3 = [callback(tmp5(tmp3[11]), obj6), callback(tmp5(tmp3[12]), { style: tmp.featureIcon, guild, disableColor: true })];
  obj5[1] = items3;
  let items4 = [callback2(tmp5(tmp3[9]).View, obj5), , ];
  const obj8 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = scrollTop(tmp3[14]).intl;
  const format = intl.format;
  const t = scrollTop(tmp3[14]).t;
  if (hasManualFormFields) {
    const obj9 = { guildName: null };
    obj9[0] = guild.name;
    let formatResult = format(t.cgX47Z, obj9);
  } else {
    const obj10 = { guildName: null };
    obj10[0] = guild.name;
    formatResult = format(t.VnxBOA, obj10);
  }
  obj8[3] = formatResult;
  items4[1] = callback(scrollTop(tmp3[13]).Heading, obj8);
  const obj11 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp3[14]).intl;
  const string = intl2.string;
  const t2 = tmp9(tmp3[14]).t;
  if (hasManualFormFields) {
    let stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  obj11[3] = stringResult;
  items4[2] = callback(scrollTop(tmp3[13]).Text, obj11);
  obj4[1] = items4;
  items1[1] = callback2(derivedValue, obj4);
  obj1[1] = items1;
  return callback2(derivedValue, obj1);
};