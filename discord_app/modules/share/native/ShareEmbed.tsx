import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { container: null, containerRevamp: null, thumbnail: null, contentContainer: null, authorView: null, authorThumbnail: null, loadingSpinner: null };
createCacheKey = { flexDirection: "row", height: 80, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderColor: require("Themes").colors.BORDER_STRONG, borderWidth: 1, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderWidth: 0 };
createCacheKey[2] = { width: 80 };
createCacheKey[3] = { flex: 1, flexDirection: "column", justifyContent: "center", paddingLeft: 12, paddingRight: 24 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", marginBottom: 3 };
createCacheKey[5] = { height: 16, width: 16, borderRadius: require("Themes").radii.sm, marginRight: 4 };
createCacheKey[6] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: 16, width: 16, borderRadius: require("Themes").radii.sm, marginRight: 4 };
const result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default function ShareEmbed(embed) {
  embed = embed.embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  let React;
  let memo3;
  let tmp = createCacheKey();
  React = tmp;
  let items = [embed];
  const memo = React.useMemo(() => {
    if (null != embed) {
      const thumbnail = tmp.thumbnail;
      let url;
      if (thumbnail != null) {
        url = thumbnail.url;
      }
      if (url == null) {
        const image = tmp.image;
        let url1;
        if (image != null) {
          url1 = image.url;
        }
        url = url1;
      }
      if (null != url) {
        const obj = { uri: null };
        obj[0] = url;
        return obj;
      }
    }
  }, items);
  const items1 = [isLoadingEmbed, tmp];
  let memo1 = React.useMemo(() => {
    let tmp = null;
    if (isLoadingEmbed) {
      const obj = { style: null };
      obj[0] = _undefined.loadingSpinner;
      tmp = outer1_5(embed(isLoadingEmbed[5]).ActivityIndicator, obj);
    }
    return tmp;
  }, items1);
  const items2 = [embed, tmp];
  const items3 = [embed];
  const memo2 = React.useMemo(() => {
    let author;
    if (embed != null) {
      author = embed.author;
    }
    if (null == author) {
      return null;
    } else {
      let icon_url = author.proxy_icon_url;
      if (icon_url == null) {
        icon_url = author.icon_url;
      }
      let obj = { style: null, children: null };
      obj[0] = _undefined.authorView;
      let tmp5 = null != icon_url;
      if (tmp5) {
        obj = { style: null, source: null, resizeMode: "cover" };
        obj[0] = tmp4.authorThumbnail;
        obj = { uri: null };
        obj[0] = icon_url;
        obj[1] = obj;
        tmp5 = outer1_5(memo3, obj);
      }
      const items = [tmp5, ];
      const obj1 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", ellipsizeMode: "tail", lineClamp: 1, children: null };
      obj1[4] = author.name;
      items[1] = outer1_5(embed(isLoadingEmbed[6]).Text, obj1);
      obj[1] = items;
      return outer1_6(outer1_4, obj);
    }
  }, items2);
  memo3 = React.useMemo(() => {
    let title;
    if (embed != null) {
      title = embed.title;
    }
    let tmp2 = null;
    if (null != title) {
      const obj = { style: null, variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: null };
      obj[0] = { marginVertical: 1 };
      obj[5] = title;
      tmp2 = outer1_5(embed(isLoadingEmbed[6]).Text, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [embed, memo3];
  [][0] = embed;
  const memo4 = React.useMemo(() => {
    if (embed != null) {
      const description = embed.description;
    }
    let tmp = null;
    if (null == memo3) {
      tmp = null;
      if (null != description) {
        const obj = { style: null, variant: "text-xs/medium", color: "text-default", lineClamp: 1, ellipsizeMode: "tail", children: null };
        obj[0] = { marginVertical: 1 };
        obj[5] = description;
        tmp = outer1_5(embed(isLoadingEmbed[6]).Text, obj);
      }
    }
    return tmp;
  }, items4);
  if (null != embed) {
    const items5 = [tmp.container, ];
    let containerRevamp;
    if (embed.isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    let obj = { style: null, children: null };
    items5[1] = containerRevamp;
    obj[0] = items5;
    if (!isLoadingEmbed) {
      let tmp9Result = null != memo;
      if (tmp9Result) {
        obj = { style: null, source: null, resizeMode: "cover" };
        obj[0] = tmp.thumbnail;
        obj[1] = memo;
        tmp9Result = tmp9(memo3, obj);
      }
      obj = { children: null };
      const items6 = [tmp9Result, ];
      let obj1 = { style: null, children: null };
      obj1[0] = tmp.contentContainer;
      const items7 = [memo2, memo3, memo4, tmp7];
      obj1[1] = items7;
      items6[1] = closure_6(tmp10, obj1);
      obj[0] = items6;
      memo1 = tmp12(closure_7, obj);
      const tmp13 = closure_7;
    }
    obj[1] = memo1;
    tmp9Result = tmp9(tmp10, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};