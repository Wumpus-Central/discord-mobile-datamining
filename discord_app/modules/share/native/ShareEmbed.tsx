// discord_app/modules/share/native/ShareEmbed.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  containerRevamp: null,
  thumbnail: null,
  contentContainer: null,
  authorView: null,
  authorThumbnail: null,
  loadingSpinner: null,
};
createStyles = {
  flexDirection: "row",
  height: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.container = createStyles;
createStyles.containerRevamp = { borderWidth: 0 };
createStyles.thumbnail = { width: 80 };
createStyles.contentContainer = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 12,
  paddingRight: 24,
};
createStyles.authorView = { flexDirection: "row", alignItems: "center", marginBottom: 3 };
let size = { height: 16, width: 16, borderRadius: nativeDefault.radii.sm, marginRight: 4 };
createStyles.authorThumbnail = size;
createStyles.loadingSpinner = { flex: 1 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default function ShareEmbed(embed) {
  embed = embed.embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  let tmp = closure_8();
  noop = tmp;
  let items = [embed];
  const memo = noop.useMemo(() => {
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
        const obj = { uri: url };
        return obj;
      }
    }
  }, items);
  const items1 = [isLoadingEmbed, tmp];
  let memo1 = noop.useMemo(() => {
    let tmp = null;
    if (isLoadingEmbed) {
      const obj = { style: closure_2.loadingSpinner };
      tmp = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
    }
    return tmp;
  }, items1);
  const items2 = [embed, tmp];
  const items3 = [embed];
  const memo2 = noop.useMemo(() => {
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
      let obj = { style: closure_2.authorView, children: null };
      let tmp5 = null != icon_url;
      if (tmp5) {
        obj = { style: tmp4.authorThumbnail, source: null, resizeMode: "cover" };
        obj = { uri: icon_url };
        obj.source = obj;
        tmp5 = hasOwnProperty(React3, obj);
      }
      const items = [tmp5];
      const obj1 = {
        variant: "text-xs/semibold",
        color: "mobile-text-heading-primary",
        ellipsizeMode: "tail",
        lineClamp: 1,
        children: author.name,
      };
      items[1] = hasOwnProperty(Text_Text.Text, obj1);
      obj.children = items;
      return timestampProducer(React4, obj);
    }
  }, items2);
  const memo3 = noop.useMemo(() => {
    let title;
    if (embed != null) {
      title = embed.title;
    }
    let tmp2 = null;
    if (null != title) {
      const obj = {
        style: { marginVertical: 1 },
        variant: "text-xs/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        ellipsizeMode: "tail",
        children: title,
      };
      tmp2 = hasOwnProperty(Text_Text.Text, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [embed, memo3];
  [][0] = embed;
  const memo4 = noop.useMemo(() => {
    if (embed != null) {
      const description = embed.description;
    }
    let tmp = null;
    if (null == memo3) {
      tmp = null;
      if (null != description) {
        const obj = {
          style: { marginVertical: 1 },
          variant: "text-xs/medium",
          color: "text-default",
          lineClamp: 1,
          ellipsizeMode: "tail",
          children: description,
        };
        tmp = hasOwnProperty(Text_Text.Text, obj);
      }
    }
    return tmp;
  }, items4);
  if (null != embed) {
    const items5 = [tmp.container];
    let containerRevamp;
    if (embed.isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    let obj = { style: null, children: null };
    items5[1] = containerRevamp;
    obj.style = items5;
    if (!isLoadingEmbed) {
      let tmp9Result = null != memo;
      if (tmp9Result) {
        obj = { style: tmp.thumbnail, source: memo, resizeMode: "cover" };
        tmp9Result = tmp9(memo3, obj);
      }
      obj = { children: null };
      const items6 = [tmp9Result];
      let obj1 = { style: tmp.contentContainer, children: null };
      const items7 = [memo2, memo3, memo4, tmp7];
      obj1.children = items7;
      items6[1] = closure_6(tmp10, obj1);
      obj.children = items6;
      memo1 = tmp12(closure_7, obj);
    }
    obj.children = memo1;
    tmp9Result = tmp9(tmp10, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}
