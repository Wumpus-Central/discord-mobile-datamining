// discord_app/modules/share/native/ShareEmbed.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    flexDirection: "row",
    height: 80,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderColor: nativeDefault.colors.BORDER_STRONG,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  },
  containerRevamp: { borderWidth: 0 },
  thumbnail: { width: 80 },
  contentContainer: { flex: 1, flexDirection: "column", justifyContent: "center", paddingLeft: 12, paddingRight: 24 },
  authorView: { flexDirection: "row", alignItems: "center", marginBottom: 3 },
  authorThumbnail: null,
  loadingSpinner: null,
};
let size = { height: 16, width: 16, borderRadius: nativeDefault.radii.sm, marginRight: 4 };
obj2.authorThumbnail = size;
obj2.loadingSpinner = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  height: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareEmbed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ShareEmbed(arg0) {
      const cResult = c.c(31);
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
      if (!isLoadingEmbed) {
        let author;
        if (embed != null) {
          author = embed.author;
        }
        if (null == author) {
          let title;
          if (embed != null) {
            title = embed.title;
          }
          if (cResult[13] !== title) {
            let tmp30 = null;
            if (null != title) {
              const obj3 = {
                style: { marginVertical: 1 },
                variant: "text-xs/semibold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                ellipsizeMode: "tail",
                children: title,
              };
              tmp30 = hasOwnProperty(Text_Text.Text, obj3);
            }
            cResult[13] = title;
            cResult[14] = tmp30;
            let tmp29 = tmp30;
          } else {
            tmp29 = cResult[14];
          }
          let description;
          if (embed != null) {
            description = embed.description;
          }
          if (cResult[15] === description) {
            if (cResult[16] === tmp29) {
              let tmp33 = cResult[17];
            }
            let url2;
            if (embed != null) {
              url2 = embed.url;
            }
            if (cResult[18] !== url2) {
              let tmp38 = null;
              if (null != url2) {
                const obj4 = {
                  style: { marginVertical: 1 },
                  variant: "text-xs/medium",
                  color: "text-link",
                  lineClamp: 1,
                  ellipsizeMode: "tail",
                  children: url2,
                };
                tmp38 = hasOwnProperty(Text_Text.Text, obj4);
              }
              cResult[18] = url2;
              cResult[19] = tmp38;
              let tmp37 = tmp38;
            } else {
              tmp37 = cResult[19];
            }
            if (cResult[20] === null) {
              if (cResult[21] === tmp33) {
                if (cResult[22] === embed) {
                  if (cResult[23] === tmp5) {
                    if (cResult[24] === isLoadingEmbed) {
                      if (cResult[25] === isRevamp) {
                        if (cResult[26] === null) {
                          if (cResult[27] === tmp4) {
                            if (cResult[28] === tmp29) {
                              if (cResult[29] === tmp37) {
                                let tmp40 = cResult[30];
                              }
                              return tmp40;
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
              const items = [tmp4.container];
              let containerRevamp;
              if (isRevamp) {
                containerRevamp = tmp4.containerRevamp;
              }
              const obj5 = { style: null, children: null };
              items[1] = containerRevamp;
              obj5.style = items;
              let tmp46Result = null;
              if (!isLoadingEmbed) {
                let tmp42Result = null != tmp5;
                if (tmp42Result) {
                  const obj6 = { style: tmp4.thumbnail, source: tmp5, resizeMode: "cover" };
                  tmp42Result = hasOwnProperty(FastImageDefault, obj6);
                }
                const obj7 = { children: null };
                const items1 = [tmp42Result];
                const obj8 = { style: tmp4.contentContainer, children: null };
                const items2 = [null, tmp29, tmp33, tmp37];
                obj8.children = items2;
                items1[1] = timestampProducer(View, obj8);
                obj7.children = items1;
                tmp46Result = timestampProducer(React5, obj7);
              }
              obj5.children = tmp46Result;
              let tmp42Result2 = hasOwnProperty(View, obj5);
            } else {
              tmp42Result2 = null;
            }
            cResult[20] = null;
            cResult[21] = tmp33;
            cResult[22] = embed;
            cResult[23] = tmp5;
            cResult[24] = isLoadingEmbed;
            cResult[25] = isRevamp;
            cResult[26] = null;
            cResult[27] = tmp4;
            cResult[28] = tmp29;
            cResult[29] = tmp37;
            cResult[30] = tmp42Result2;
            tmp40 = tmp42Result2;
          }
          let tmp34 = null;
          if (null == tmp29) {
            tmp34 = null;
            if (null != description) {
              const obj9 = {
                style: { marginVertical: 1 },
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 1,
                ellipsizeMode: "tail",
                children: description,
              };
              tmp34 = hasOwnProperty(Text_Text.Text, obj9);
            }
          }
          cResult[15] = description;
          cResult[16] = tmp29;
          cResult[17] = tmp34;
          tmp33 = tmp34;
        } else {
          let icon_url = author.proxy_icon_url;
          if (icon_url == null) {
            icon_url = author.icon_url;
          }
          if (cResult[4] === icon_url) {
            if (cResult[5] === tmp4.authorThumbnail) {
              let tmp16 = cResult[6];
            }
            if (cResult[7] !== author.name) {
              const obj10 = {
                variant: "text-xs/semibold",
                color: "mobile-text-heading-primary",
                ellipsizeMode: "tail",
                lineClamp: 1,
                children: author.name,
              };
              const tmp22 = hasOwnProperty(Text_Text.Text, obj10);
              cResult[7] = author.name;
              cResult[8] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[8];
            }
            if (cResult[9] === tmp4.authorView) {
              if (cResult[10] === tmp16) {
              }
            }
            const obj11 = { style: tmp4.authorView, children: null };
            const items3 = [tmp16, tmp20];
            obj11.children = items3;
            const tmp26 = timestampProducer(View, obj11);
            cResult[9] = tmp4.authorView;
            cResult[10] = tmp16;
            cResult[11] = tmp20;
            cResult[12] = tmp26;
          }
          let tmp17 = null != icon_url;
          if (tmp17) {
            const obj12 = { style: tmp4.authorThumbnail, source: null, resizeMode: "cover" };
            const obj13 = { uri: icon_url };
            obj12.source = obj13;
            tmp17 = hasOwnProperty(FastImageDefault, obj12);
          }
          cResult[4] = icon_url;
          cResult[5] = tmp4.authorThumbnail;
          cResult[6] = tmp17;
          tmp16 = tmp17;
        }
      } else if (cResult[2] !== tmp4.loadingSpinner) {
        const obj14 = { style: tmp4.loadingSpinner };
        const tmp12 = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj14);
        cResult[2] = tmp4.loadingSpinner;
        cResult[3] = tmp12;
      }
    }
  : function ShareEmbed(embed) {
      embed = embed.embed;
      const isLoadingEmbed = embed.isLoadingEmbed;
      let memo3;
      let tmp = closure_8();
      dependencyMap = tmp;
      let items = [embed];
      const memo = memo3.useMemo(() => {
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
            const obj = { uri: url };
            return obj;
          }
        }
      }, items);
      const items1 = [isLoadingEmbed, tmp];
      let memo1 = memo3.useMemo(() => {
        let tmp = null;
        if (isLoadingEmbed) {
          const obj = { style: closure_2.loadingSpinner };
          tmp = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, obj);
        }
        return tmp;
      }, items1);
      const items2 = [embed, tmp];
      const items3 = [embed];
      const memo2 = memo3.useMemo(() => {
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
          const obj = { style: closure_2.authorView, children: null };
          let tmp5 = null != icon_url;
          if (tmp5) {
            const obj2 = { style: tmp4.authorThumbnail, source: null, resizeMode: "cover" };
            const obj3 = { uri: icon_url };
            obj2.source = obj3;
            tmp5 = hasOwnProperty(FastImageDefault, obj2);
          }
          const items = [tmp5];
          const obj4 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            ellipsizeMode: "tail",
            lineClamp: 1,
            children: author.name,
          };
          items[1] = hasOwnProperty(Text_Text.Text, obj4);
          obj.children = items;
          return timestampProducer(View, obj);
        }
      }, items2);
      memo3 = memo3.useMemo(() => {
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
      const memo4 = memo3.useMemo(() => {
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
            let obj2 = { style: tmp.thumbnail, source: memo, resizeMode: "cover" };
            tmp9Result = closure_5(isLoadingEmbed(6164), obj2);
          }
          let obj3 = { children: null };
          const items6 = [tmp9Result];
          let obj4 = { style: tmp.contentContainer, children: null };
          const items7 = [memo2, memo3, memo4, tmp7];
          obj4.children = items7;
          items6[1] = closure_6(View, obj4);
          obj3.children = items6;
          memo1 = closure_6(closure_7, obj3);
        }
        obj.children = memo1;
        let tmp9Result2 = closure_5(View, obj);
      } else {
        tmp9Result2 = null;
      }
      return tmp9Result2;
    };
