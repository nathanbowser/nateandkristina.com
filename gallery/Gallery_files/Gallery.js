// Created by iWeb 3.0.2 local-build-20110219

function createMediaStream_id1()
{return IWCreateMediaCollection("http://nateandkristina.com/http/Gallery/Gallery_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://nateandkristina.com/http/Gallery',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://nateandkristina.com/http/Gallery',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(295,221),new IWSize(295,34),new IWSize(442,270),27,27,0,new IWSize(30,30)),new IWPhotoFrame([IWCreateImage('Gallery_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Gallery_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.700000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Gallery_files/GalleryMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
