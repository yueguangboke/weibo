//********************************************************************************
//** 插件功能:		文章内容关键字替换
//** 插件应用:		为Z-Blog开发(本脚本适用于任何系统)
//** 插件制作:		软件兔 (http://blog.wyshen.com/ SoftBunny+Soft@Gmail.com)
//** 备　　注:	
//**
//** 变更记录:	
//** 2007-05-12	基线版本
//********************************************************************************
var cnames,keys,urls,titles,windows;
var objAll,eCount,j,k;
//关键字定义 By 软件兔
cnames = "main".split(',');
keys = new Array('Google Adsense','Google Adwords','Google Earth','Google Maps','Gmail','Chrome','Twitter','Facebook','Windows','微软','雅虎','维基百科','WordPress','谷歌地图','YouTube','华为','');
urls = new Array('https://www.williamlong.info/tag/Adsense.html','https://www.williamlong.info/tag/Adwords.html','https://www.williamlong.info/tag/GoogleEarth.html','https://www.williamlong.info/tag/GoogleMaps.html','https://www.williamlong.info/tag/Gmail.html','https://www.williamlong.info/tag/Chrome.html','https://www.williamlong.info/tag/Twitter.html','https://www.williamlong.info/tag/Facebook.html','https://www.williamlong.info/tag/Windows.html','https://www.williamlong.info/tag/Microsoft.html','https://www.williamlong.info/tag/Yahoo.html','https://www.williamlong.info/tag/Wiki.html','https://www.williamlong.info/tag/WordPress.html','https://www.williamlong.info/google/','https://www.williamlong.info/tag/YouTube.html','https://www.williamlong.info/tag/Huawei.html','');
titles = new Array('Google Adsense','Google Adwords','Google Earth','Google Maps','Gmail','Chrome','Twitter','Facebook','Windows','微软','雅虎','维基百科','WordPress','谷歌地图','YouTube','华为','');
windows = new Array('_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','_blank','');
//关键字定义 By 软件兔

if (cnames.legnth != 1 || cnames[0] != "")
{
	objAll=document.getElementsByTagName("*");
	eCount=objAll.length;
	for (j=0; j<eCount; j++)
		if (objAll[j].innerHTML != "")
			if (objAll[j].className != null)
				for (k=0; k<cnames.length; k++)
					if (objAll[j].className.toLowerCase() == cnames[k].toLowerCase() && cnames[k] != "")
						objAll[j].innerHTML = RplKey(objAll[j].innerHTML);
}

function RplKey(str)
{
	var reg,patt,m;
	var i=0;
	var p=0;
	var s="";
	patt="<a [^>]*>[^<]*</a>|<[^>]*>|"+keys.join("|");
	patt=patt.substr(0,patt.length-1);
	
	reg = new RegExp(patt,"igm");  // 创建正则表达式对象。
	while ((m = reg.exec(str)) != null)
		if(m.toString().substr(0,1)!="<")
			for(i=0;i<keys.length-1;i++)
				if(m.toString().toLowerCase() == keys[i].toLowerCase())
				{
					s+=str.substring(p,m.index)+"<a href=\"" + urls[i] + "\" Class=\"keylink\" title=\"" + titles[i] + "\"";
					if (windows[i]!="")
						s+="Target=\"" + windows[i] + "\"";
					s+=">" + m.toString() + "</a>";
					//p=m.lastIndex;
					p=m.index+keys[i].length;
					continue;
				}
				s+=str.substring(p,str.length);
	return s;
}