// === Module 13717: ShareEmbed ===

// Module 13717 (ShareEmbed)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let react = react_mod;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerRevamp: { borderWidth: 0 }, thumbnail: { width: 80 }, contentContainer: { flex: 1, flexDirection: "column", justifyContent: "center", paddingLeft: 12, paddingRight: 24 }, authorView: { flexDirection: "row", alignItems: "center", marginBottom: 3 }, authorThumbnail: size, loadingSpinner: { flex: 1 } };
obj2 = { flexDirection: "row", height: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { height: 16, width: 16, borderRadius: nativeDefault.radii.sm, marginRight: 4 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let embed;
  let isLoadingEmbed;
  let isRevamp;
  let items;
  let items2;
  let items3;
  let obj7;
  let tmp27;
  let tmp44Result;
  const obj = react2;
  const cResult = obj.c(31);
  ({ embed, isLoadingEmbed, isRevamp } = arg0);
  const tmp4 = closure_8();
  if (null != embed) {
    const thumbnail = embed.thumbnail;
    let url;
    if (thumbnail != null) {
      url = thumbnail.url;
    }
    if (url == null) {
      const image = embed.image;
      let url1;
      if (image != null) {
        url1 = image.url;
      }
      url = url1;
    }
    if (null != url) {
      if (cResult[0] !== url) {
        const obj2 = { uri: url };
        cResult[0] = url;
        cResult[1] = obj2;
      }
    }
  }
  let tmp9 = null;
  if (isLoadingEmbed) {
    let tmp10;
    if (cResult[2] !== tmp4.loadingSpinner) {
      const obj3 = { style: tmp4.loadingSpinner };
      const tmp12 = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj3);
      cResult[2] = tmp4.loadingSpinner;
      cResult[3] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[3];
    }
    tmp9 = tmp10;
  }
  let author;
  if (embed != null) {
    author = embed.author;
  }
  let tmp14 = null;
  if (null != author) {
    let icon_url = author.proxy_icon_url;
    if (icon_url == null) {
      icon_url = author.icon_url;
    }
    if (cResult[4] === icon_url) {
      let tmp15;
      let tmp19;
      if (cResult[5] === tmp4.authorThumbnail) {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== author.name) {
        const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", ellipsizeMode: "tail", lineClamp: 1, children: author.name };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[7] = author.name;
        cResult[8] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp4.authorView) {
        if (cResult[10] === tmp15) {
          let tmp22;
          if (cResult[11] === tmp19) {
            tmp22 = cResult[12];
          }
          tmp14 = tmp22;
        }
      }
      const obj5 = { style: tmp4.authorView, children: items };
      items = [tmp15, tmp19];
      const tmp25 = metroRequire(React3, obj5);
      cResult[9] = tmp4.authorView;
      cResult[10] = tmp15;
      cResult[11] = tmp19;
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    let tmp16 = null != icon_url;
    if (tmp16) {
      const obj6 = { style: tmp4.authorThumbnail, source: obj7, resizeMode: "cover" };
      obj7 = { uri: icon_url };
      tmp16 = hasOwnProperty(_false, obj6);
    }
    cResult[4] = icon_url;
    cResult[5] = tmp4.authorThumbnail;
    cResult[6] = tmp16;
    tmp15 = tmp16;
  }
  let title;
  if (embed != null) {
    title = embed.title;
  }
  if (cResult[13] !== title) {
    let tmp28 = null;
    if (null != title) {
      const obj8 = { style: { marginVertical: 1 }, variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: title };
      tmp28 = hasOwnProperty(Text_Text.Text, obj8);
    }
    cResult[13] = title;
    cResult[14] = tmp28;
    tmp27 = tmp28;
  } else {
    tmp27 = cResult[14];
  }
  let description;
  if (embed != null) {
    description = embed.description;
  }
  if (cResult[15] === description) {
    let tmp31;
    let tmp35;
    let tmp40Result2;
    if (cResult[16] === tmp27) {
      tmp31 = cResult[17];
    }
    let url2;
    if (embed != null) {
      url2 = embed.url;
    }
    if (cResult[18] !== url2) {
      let tmp36 = null;
      if (null != url2) {
        const obj9 = { style: { marginVertical: 1 }, variant: "text-xs/medium", color: "text-link", lineClamp: 1, ellipsizeMode: "tail", children: url2 };
        tmp36 = hasOwnProperty(Text_Text.Text, obj9);
      }
      cResult[18] = url2;
      cResult[19] = tmp36;
      tmp35 = tmp36;
    } else {
      tmp35 = cResult[19];
    }
    if (cResult[20] === tmp14) {
      if (cResult[21] === tmp31) {
        if (cResult[22] === embed) {
          if (cResult[23] === tmp5) {
            if (cResult[24] === isLoadingEmbed) {
              if (cResult[25] === isRevamp) {
                if (cResult[26] === tmp9) {
                  if (cResult[27] === tmp4) {
                    if (cResult[28] === tmp27) {
                      let tmp38;
                      if (cResult[29] === tmp35) {
                        tmp38 = cResult[30];
                      }
                      return tmp38;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (null != embed) {
      const items1 = [tmp4.container, ];
      let containerRevamp;
      if (isRevamp) {
        containerRevamp = tmp4.containerRevamp;
      }
      const obj10 = { style: items1, children: tmp44Result };
      items1[1] = containerRevamp;
      tmp44Result = tmp9;
      if (!isLoadingEmbed) {
        let tmp40Result = null != tmp5;
        if (tmp40Result) {
          const obj11 = { style: tmp4.thumbnail, source: tmp5, resizeMode: "cover" };
          tmp40Result = hasOwnProperty(_false, obj11);
        }
        const obj12 = { children: items2 };
        items2 = [tmp40Result, ];
        const obj13 = { style: tmp4.contentContainer, children: items3 };
        items3 = [tmp14, tmp27, tmp31, tmp35];
        items2[1] = metroRequire(React3, obj13);
        tmp44Result = metroRequire(metroImportDefault, obj12);
      }
      tmp40Result2 = hasOwnProperty(React3, obj10);
    } else {
      tmp40Result2 = null;
    }
    cResult[20] = tmp14;
    cResult[21] = tmp31;
    cResult[22] = embed;
    cResult[23] = tmp5;
    cResult[24] = isLoadingEmbed;
    cResult[25] = isRevamp;
    cResult[26] = tmp9;
    cResult[27] = tmp4;
    cResult[28] = tmp27;
    cResult[29] = tmp35;
    cResult[30] = tmp40Result2;
    tmp38 = tmp40Result2;
  }
  let tmp32 = null;
  if (null == tmp27) {
    tmp32 = null;
    if (null != description) {
      const obj14 = { style: { marginVertical: 1 }, variant: "text-xs/medium", color: "text-default", lineClamp: 1, ellipsizeMode: "tail", children: description };
      tmp32 = hasOwnProperty(Text_Text.Text, obj14);
    }
  }
  cResult[15] = description;
  cResult[16] = tmp27;
  cResult[17] = tmp32;
  tmp31 = tmp32;
}) : ((embed) => {
  let closure_2;
  let items6;
  let items7;
  let tmp9Result2;
  embed = embed.embed;
  const isLoadingEmbed = embed.isLoadingEmbed;
  const isRevamp = embed.isRevamp;
  let tmp = closure_8();
  react = tmp;
  let items = [embed];
  const memo = react.useMemo(() => {
    if (null != embed) {
      const thumbnail = embed.thumbnail;
      let url;
      if (thumbnail != null) {
        url = thumbnail.url;
      }
      if (url == null) {
        const image = embed.image;
        let url1;
        if (image != null) {
          url1 = image.url;
        }
        url = url1;
      }
      if (null != url) {
        return { uri: url };
      }
    }
  }, items);
  const items1 = [isLoadingEmbed, tmp];
  let memo1 = react.useMemo(() => {
    let tmp = null;
    if (isLoadingEmbed) {
      const obj = { style: closure_2.loadingSpinner };
      tmp = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
    }
    return tmp;
  }, items1);
  const items2 = [embed, tmp];
  const items3 = [embed];
  const memo2 = react.useMemo(() => {
    let items;
    let obj3;
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
      let tmp5 = null != icon_url;
      const obj = { style: closure_2.authorView, children: items };
      if (tmp5) {
        const obj2 = { style: tmp4.authorThumbnail, source: obj3, resizeMode: "cover" };
        obj3 = { uri: icon_url };
        tmp5 = hasOwnProperty(_false, obj2);
      }
      items = [tmp5, ];
      const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", ellipsizeMode: "tail", lineClamp: 1, children: author.name };
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      return metroRequire(React3, obj);
    }
  }, items2);
  const memo3 = react.useMemo(() => {
    let title;
    if (embed != null) {
      title = embed.title;
    }
    let tmp2 = null;
    if (null != title) {
      const obj = { style: { marginVertical: 1 }, variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, ellipsizeMode: "tail", children: title };
      tmp2 = hasOwnProperty(Text_Text.Text, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [embed, memo3];
  [][0] = embed;
  const memo4 = react.useMemo(() => {
    let description;
    if (embed != null) {
      description = embed.description;
    }
    let tmp = null;
    if (null == memo3) {
      tmp = null;
      if (null != description) {
        const obj = { style: { marginVertical: 1 }, variant: "text-xs/medium", color: "text-default", lineClamp: 1, ellipsizeMode: "tail", children: description };
        tmp = hasOwnProperty(Text_Text.Text, obj);
      }
    }
    return tmp;
  }, items4);
  if (null != embed) {
    const items5 = [tmp.container, ];
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    let obj = { style: items5, children: memo1 };
    items5[1] = containerRevamp;
    if (!isLoadingEmbed) {
      let tmp9Result = null != memo;
      if (tmp9Result) {
        let obj2 = { style: tmp.thumbnail, source: memo, resizeMode: "cover" };
        tmp9Result = closure_5(memo3, obj2);
      }
      let obj3 = { children: items6 };
      items6 = [tmp9Result, ];
      let obj4 = { style: tmp.contentContainer, children: items7 };
      items7 = [memo2, memo3, memo4, tmp7];
      items6[1] = closure_6(closure_4, obj4);
      memo1 = closure_6(closure_7, obj3);
    }
    tmp9Result2 = closure_5(closure_4, obj);
  } else {
    tmp9Result2 = null;
  }
  return tmp9Result2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default tmp5;