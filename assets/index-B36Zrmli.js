var af=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var WM=af(K=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="165",sf=0,el=1,of=2,yu=1,lf=2,En=3,Kn=0,Dt=1,Tn=2,qn=0,Wi=1,tl=2,nl=3,il=4,cf=5,hi=100,uf=101,hf=102,ff=103,df=104,pf=200,mf=201,gf=202,vf=203,no=204,io=205,xf=206,_f=207,yf=208,Sf=209,Mf=210,bf=211,Ef=212,Tf=213,Af=214,wf=0,Cf=1,Rf=2,La=3,Lf=4,Pf=5,Uf=6,Df=7,wo=0,Ff=1,If=2,Yn=0,Of=1,Nf=2,kf=3,Bf=4,Gf=5,zf=6,Hf=7,Su=300,Ki=301,Ji=302,ro=303,ao=304,Xa=306,so=1e3,gi=1001,oo=1002,Xt=1003,Vf=1004,Wr=1005,jt=1006,rs=1007,vi=1008,Jn=1009,Wf=1010,Xf=1011,Pa=1012,Mu=1013,$i=1014,Wn=1015,qa=1016,bu=1017,Eu=1018,ji=1020,qf=35902,Yf=1021,Zf=1022,dn=1023,Kf=1024,Jf=1025,Xi=1026,Qi=1027,$f=1028,Tu=1029,jf=1030,Au=1031,wu=1033,as=33776,ss=33777,os=33778,ls=33779,rl=35840,al=35841,sl=35842,ol=35843,ll=36196,cl=37492,ul=37496,hl=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,vl=37814,xl=37815,_l=37816,yl=37817,Sl=37818,Ml=37819,bl=37820,El=37821,cs=36492,Tl=36494,Al=36495,Qf=36283,wl=36284,Cl=36285,Rl=36286,ed=3200,td=3201,Co=0,nd=1,Vn="",$t="srgb",Qn="srgb-linear",Ro="display-p3",Ya="display-p3-linear",Ua="linear",at="srgb",Da="rec709",Fa="p3",Mi=7680,Ll=519,id=512,rd=513,ad=514,Cu=515,sd=516,od=517,ld=518,cd=519,Pl=35044,Ul="300 es",An=2e3,Ia=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,lo=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function hs(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,a,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],b=r[1],x=r[4],M=r[7],P=r[2],w=r[5],T=r[8];return a[0]=s*v+o*b+l*P,a[3]=s*m+o*x+l*w,a[6]=s*p+o*M+l*T,a[1]=c*v+u*b+f*P,a[4]=c*m+u*x+f*w,a[7]=c*p+u*M+f*T,a[2]=h*v+d*b+g*P,a[5]=h*m+d*x+g*w,a[8]=h*p+d*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*a,d=c*a-s*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*s)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fs.makeScale(e,t)),this}rotate(e){return this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new qe;function Ru(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){const n=Er("canvas");return n.style.display="block",n}const Dl={};function Lu(n){n in Dl||(Dl[n]=!0,console.warn(n))}function fd(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Fl=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[Qn]:{transfer:Ua,primaries:Da,toReference:n=>n,fromReference:n=>n},[$t]:{transfer:at,primaries:Da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Ua,primaries:Fa,toReference:n=>n.applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Fl)},[Ro]:{transfer:at,primaries:Fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Fl).convertLinearToSRGB()}},dd=new Set([Qn,Ya]),tt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xr[e].toReference,r=Xr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xr[n].primaries},getTransfer:function(n){return n===Vn?Ua:Xr[n].transfer}};function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bi;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Er("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=qi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class Pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ps(r[s].image)):a.push(ps(r[s]))}else a=ps(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class Lt extends nr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=gi,r=gi,a=jt,s=vi,o=dn,l=Jn,c=Lt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ir(),this.name="",this.source=new Pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Su;Lt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,P=(p+1)/2,w=(u+h)/4,T=(f+v)/4,C=(g+m)/4;return x>M&&x>P?x<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(x),r=w/i,a=T/i):M>P?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=w/r,a=C/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=T/a,r=C/a),this.set(i,r,a,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends vd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=a[s+0],d=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*v,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,p*b);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}const M=o*b;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+v*M,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[s],h=a[s+1],d=a[s+2],g=a[s+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(a/2),h=l(i/2),d=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(s-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(s-r)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),f=2*(a*i-s*t);return this.x=t+l*c+s*f-o*u,this.y=i+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new F,Ol=new Ur;class Dr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(a,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Yr.subVectors(this.max,cr),Ei.subVectors(e.a,cr),Ti.subVectors(e.b,cr),Ai.subVectors(e.c,cr),Pn.subVectors(Ti,Ei),Un.subVectors(Ai,Ti),ni.subVectors(Ei,Ai);let t=[0,-Pn.z,Pn.y,0,-Un.z,Un.y,0,-ni.z,ni.y,Pn.z,0,-Pn.x,Un.z,0,-Un.x,ni.z,0,-ni.x,-Pn.y,Pn.x,0,-Un.y,Un.x,0,-ni.y,ni.x,0];return!gs(t,Ei,Ti,Ai,Yr)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,Ei,Ti,Ai,Yr))?!1:(Zr.crossVectors(Pn,Un),t=[Zr.x,Zr.y,Zr.z],gs(t,Ei,Ti,Ai,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new F,new F,new F,new F,new F,new F,new F,new F],Zt=new F,qr=new Dr,Ei=new F,Ti=new F,Ai=new F,Pn=new F,Un=new F,ni=new F,cr=new F,Yr=new F,Zr=new F,ii=new F;function gs(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){ii.fromArray(n,a);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _d=new Dr,ur=new F,vs=new F;class Za{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_d.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(vs)),this.expandByPoint(ur.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new F,xs=new F,Kr=new F,Dn=new F,_s=new F,Jr=new F,ys=new F;class Lo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xs.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(xs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Kr),o=Dn.dot(this.direction),l=-Dn.dot(Kr),c=Dn.lengthSq(),u=Math.abs(1-s*s);let f,h,d,g;if(u>0)if(f=s*l-o,h=s*o-l,g=a*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xs).addScaledVector(Kr,h),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,a){_s.subVectors(t,e),Jr.subVectors(i,e),ys.crossVectors(_s,Jr);let s=this.direction.dot(ys),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Dn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(Dn,Jr));if(l<0)return null;const c=o*this.direction.dot(_s.cross(Dn));if(c<0||l+c>s)return null;const u=-o*Dn.dot(ys);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,i,r,a,s,o,l,c,u,f,h,d,g,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,f,h,d,g,v,m)}set(e,t,i,r,a,s,o,l,c,u,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),a=1/wi.setFromMatrixColumn(e,1).length(),s=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*u,d=s*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-s*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=s*l,d=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=s*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,Sd)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Fn.crossVectors(i,It),Fn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Fn.crossVectors(i,It)),Fn.normalize(),$r.crossVectors(It,Fn),r[0]=Fn.x,r[4]=$r.x,r[8]=It.x,r[1]=Fn.y,r[5]=$r.y,r[9]=It.y,r[2]=Fn.z,r[6]=$r.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],x=i[7],M=i[11],P=i[15],w=r[0],T=r[4],C=r[8],E=r[12],y=r[1],R=r[5],X=r[9],N=r[13],V=r[2],W=r[6],z=r[10],q=r[14],H=r[3],se=r[7],fe=r[11],ie=r[15];return a[0]=s*w+o*y+l*V+c*H,a[4]=s*T+o*R+l*W+c*se,a[8]=s*C+o*X+l*z+c*fe,a[12]=s*E+o*N+l*q+c*ie,a[1]=u*w+f*y+h*V+d*H,a[5]=u*T+f*R+h*W+d*se,a[9]=u*C+f*X+h*z+d*fe,a[13]=u*E+f*N+h*q+d*ie,a[2]=g*w+v*y+m*V+p*H,a[6]=g*T+v*R+m*W+p*se,a[10]=g*C+v*X+m*z+p*fe,a[14]=g*E+v*N+m*q+p*ie,a[3]=b*w+x*y+M*V+P*H,a[7]=b*T+x*R+M*W+P*se,a[11]=b*C+x*X+M*z+P*fe,a[15]=b*E+x*N+M*q+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+a*l*f-r*c*f-a*o*h+i*c*h+r*o*d-i*l*d)+v*(+t*l*d-t*c*h+a*s*h-r*s*d+r*c*u-a*l*u)+m*(+t*c*f-t*o*d-a*s*f+i*s*d+a*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=f*m*c-v*h*c+v*l*d-o*m*d-f*l*p+o*h*p,x=g*h*c-u*m*c-g*l*d+s*m*d+u*l*p-s*h*p,M=u*v*c-g*f*c+g*o*d-s*v*d-u*o*p+s*f*p,P=g*f*l-u*v*l-g*o*h+s*v*h+u*o*m-s*f*m,w=t*b+i*x+r*M+a*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=b*T,e[1]=(v*h*a-f*m*a-v*r*d+i*m*d+f*r*p-i*h*p)*T,e[2]=(o*m*a-v*l*a+v*r*c-i*m*c-o*r*p+i*l*p)*T,e[3]=(f*l*a-o*h*a-f*r*c+i*h*c+o*r*d-i*l*d)*T,e[4]=x*T,e[5]=(u*m*a-g*h*a+g*r*d-t*m*d-u*r*p+t*h*p)*T,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*p-t*l*p)*T,e[7]=(s*h*a-u*l*a+u*r*c-t*h*c-s*r*d+t*l*d)*T,e[8]=M*T,e[9]=(g*f*a-u*v*a-g*i*d+t*v*d+u*i*p-t*f*p)*T,e[10]=(s*v*a-g*o*a+g*i*c-t*v*c-s*i*p+t*o*p)*T,e[11]=(u*o*a-s*f*a-u*i*c+t*f*c+s*i*d-t*o*d)*T,e[12]=P*T,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*m+t*f*m)*T,e[14]=(g*o*r-s*v*r-g*i*l+t*v*l+s*i*m-t*o*m)*T,e[15]=(s*f*r-u*o*r+u*i*l-t*f*l-s*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,f=o+o,h=a*c,d=a*u,g=a*f,v=s*u,m=s*f,p=o*f,b=l*c,x=l*u,M=l*f,P=i.x,w=i.y,T=i.z;return r[0]=(1-(v+p))*P,r[1]=(d+M)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(d-M)*w,r[5]=(1-(h+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+x)*T,r[9]=(m-b)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=wi.set(r[0],r[1],r[2]).length();const s=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/a,u=1/s,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=An){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(o===An)d=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Ia)d=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=An){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(s-a),h=(t+e)*c,d=(i+r)*u;let g,v;if(o===An)g=(s+a)*f,v=-2*f;else if(o===Ia)g=a*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new F,Kt=new st,yd=new F(0,0,0),Sd=new F(1,1,1),Fn=new F,$r=new F,It=new F,Nl=new st,kl=new Ur;class en{constructor(e=0,t=0,i=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const Bl=new F,Ci=new Ur,yn=new st,jr=new F,hr=new F,bd=new F,Ed=new Ur,Gl=new F(1,0,0),zl=new F(0,1,0),Hl=new F(0,0,1),Vl={type:"added"},Td={type:"removed"},Ri={type:"childadded",child:null},Ss={type:"childremoved",child:null};class Et extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new F,t=new en,i=new Ur,r=new F(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new qe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hr,jr,this.up):yn.lookAt(jr,hr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(yn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new F(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new F,Sn=new F,Ms=new F,Mn=new F,Li=new F,Pi=new F,Wl=new F,bs=new F,Es=new F,Ts=new F;class fn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Jt.subVectors(r,t),Sn.subVectors(i,t),Ms.subVectors(e,t);const s=Jt.dot(Jt),o=Jt.dot(Sn),l=Jt.dot(Ms),c=Sn.dot(Sn),u=Sn.dot(Ms),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(s*u-o*l)*h;return a.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Mn.x),l.addScaledVector(s,Mn.y),l.addScaledVector(o,Mn.z),l)}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),Sn.subVectors(e,t),Jt.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Jt.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Li.subVectors(r,i),Pi.subVectors(a,i),bs.subVectors(e,i);const l=Li.dot(bs),c=Pi.dot(bs);if(l<=0&&c<=0)return t.copy(i);Es.subVectors(e,r);const u=Li.dot(Es),f=Pi.dot(Es);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Li,s);Ts.subVectors(e,a);const d=Li.dot(Ts),g=Pi.dot(Ts);if(g>=0&&d<=g)return t.copy(a);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Pi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Wl.subVectors(a,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Wl,o);const p=1/(m+v+h);return s=v*p,o=h*p,t.copy(i).addScaledVector(Li,s).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function As(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=ud(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=As(s,a,e+1/3),this.g=As(s,a,e),this.b=As(s,a,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=Du[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return tt.fromWorkingColorSpace(At.copy(this),e),Math.round(wt(At.r*255,0,255))*65536+Math.round(wt(At.g*255,0,255))*256+Math.round(wt(At.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,a=At.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=$t){tt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Qr);const i=hs(In.h,Qr.h,t),r=hs(In.s,Qr.s,t),a=hs(In.l,Qr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ke;Ke.NAMES=Du;let Ad=0;class Si extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Wi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fu extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new F,ea=new de;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Iu extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ou extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wd=0;const Ht=new st,ws=new Et,Ui=new F,Ot=new Dr,fr=new Dr,yt=new F;class Nt extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Ou:Iu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new qe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Ot.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ot.min,fr.min),Ot.expandByPoint(yt),yt.addVectors(Ot.max,fr.max),Ot.expandByPoint(yt)):(Ot.expandByPoint(fr.min),Ot.expandByPoint(fr.max))}Ot.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)yt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),yt.add(Ui)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new F,l[C]=new F;const c=new F,u=new F,f=new F,h=new de,d=new de,g=new de,v=new F,m=new F;function p(C,E,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),h.fromBufferAttribute(a,C),d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(v),o[E].add(v),o[y].add(v),l[C].add(m),l[E].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,E=b.length;C<E;++C){const y=b[C],R=y.start,X=y.count;for(let N=R,V=R+X;N<V;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new F,M=new F,P=new F,w=new F;function T(C){P.fromBufferAttribute(r,C),w.copy(P);const E=o[C];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),M.crossVectors(w,E);const R=M.dot(l[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,E=b.length;C<E;++C){const y=b[C],R=y.start,X=y.count;for(let N=R,V=R+X;N<V;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,a=new F,s=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new st,ri=new Lo,ta=new Za,ql=new F,Di=new F,Fi=new F,Ii=new F,Cs=new F,na=new F,ia=new de,ra=new de,aa=new de,Yl=new F,Zl=new F,Kl=new F,sa=new F,oa=new F;class qt extends Et{constructor(e=new Nt,t=new Fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){na.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(Cs.fromBufferAttribute(f,e),s?na.addScaledVector(Cs,u):na.addScaledVector(Cs.sub(t),u))}t.add(na)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(a),ri.copy(e.ray).recast(e.near),!(ta.containsPoint(ri.origin)===!1&&(ri.intersectSphere(ta,ql)===null||ri.origin.distanceToSquared(ql)>(e.far-e.near)**2))&&(Xl.copy(a).invert(),ri.copy(e.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=s[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,P=x;M<P;M+=3){const w=o.getX(M),T=o.getX(M+1),C=o.getX(M+2);r=la(this,p,e,i,c,u,f,w,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=la(this,s,e,i,c,u,f,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=s[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,P=x;M<P;M+=3){const w=M,T=M+1,C=M+2;r=la(this,p,e,i,c,u,f,w,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,x=m+1,M=m+2;r=la(this,s,e,i,c,u,f,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Cd(n,e,t,i,r,a,s,o){let l;if(e.side===Dt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Kn,o),l===null)return null;oa.copy(o),oa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:n}}function la(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Di),n.getVertexPosition(l,Fi),n.getVertexPosition(c,Ii);const u=Cd(n,e,t,i,Di,Fi,Ii,sa);if(u){r&&(ia.fromBufferAttribute(r,o),ra.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),u.uv=fn.getInterpolation(sa,Di,Fi,Ii,ia,ra,aa,new de)),a&&(ia.fromBufferAttribute(a,o),ra.fromBufferAttribute(a,l),aa.fromBufferAttribute(a,c),u.uv1=fn.getInterpolation(sa,Di,Fi,Ii,ia,ra,aa,new de)),s&&(Yl.fromBufferAttribute(s,o),Zl.fromBufferAttribute(s,l),Kl.fromBufferAttribute(s,c),u.normal=fn.getInterpolation(sa,Di,Fi,Ii,Yl,Zl,Kl,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};fn.getNormal(Di,Fi,Ii,f.normal),u.face=f}return u}class rr extends Nt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function g(v,m,p,b,x,M,P,w,T,C,E){const y=M/T,R=P/C,X=M/2,N=P/2,V=w/2,W=T+1,z=C+1;let q=0,H=0;const se=new F;for(let fe=0;fe<z;fe++){const ie=fe*R-N;for(let Ce=0;Ce<W;Ce++){const Je=Ce*y-X;se[v]=Je*b,se[m]=ie*x,se[p]=V,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[p]=w>0?1:-1,u.push(se.x,se.y,se.z),f.push(Ce/T),f.push(1-fe/C),q+=1}}for(let fe=0;fe<C;fe++)for(let ie=0;ie<T;ie++){const Ce=h+ie+W*fe,Je=h+ie+W*(fe+1),Y=h+(ie+1)+W*(fe+1),ae=h+(ie+1)+W*fe;l.push(Ce,Je,ae),l.push(Je,Y,ae),H+=6}o.addGroup(d,H,E),d+=H,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function Rd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Ld={clone:er,merge:Rt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ku extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new F,Jl=new de,$l=new de;class Vt extends ku{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,$l),t.subVectors($l,Jl)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Ni=1;class Dd extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Oi,Ni,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Oi,Ni,e,t);a.layers=this.layers,this.add(a);const s=new Vt(Oi,Ni,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Oi,Ni,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Oi,Ni,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Oi,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bu extends Lt{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rr(5,5,5),a=new $n({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:qn});a.uniforms.tEquirect.value=t;const s=new qt(r,a),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=jt),new Dd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const Rs=new F,Id=new F,Od=new qe;class Hn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Rs.subVectors(i,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Od.getNormalMatrix(e),r=this.coplanarPoint(Rs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Za,ca=new F;class Uo{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,a=new Hn,s=new Hn){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],b=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-a,h-c,m-d,M-p).normalize(),i[1].setComponents(l+a,h+c,m+d,M+p).normalize(),i[2].setComponents(l+s,h+u,m+g,M+b).normalize(),i[3].setComponents(l-s,h-u,m-g,M-b).normalize(),i[4].setComponents(l-o,h-f,m-v,M-x).normalize(),t===An)i[5].setComponents(l+o,h+f,m+v,M+x).normalize();else if(t===Ia)i[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gu(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Nd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Ka extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*h-s;for(let x=0;x<c;x++){const M=x*f-a;g.push(M,-b,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const x=b+c*p,M=b+c*(p+1),P=b+1+c*(p+1),w=b+1+c*p;d.push(x,M,w),d.push(M,P,w)}this.setIndex(d),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Np=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:kd,alphahash_pars_fragment:Bd,alphamap_fragment:Gd,alphamap_pars_fragment:zd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:Jd,iridescence_fragment:$d,bumpmap_pars_fragment:jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:sp,common:op,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:up,displacementmap_vertex:hp,emissivemap_fragment:fp,emissivemap_pars_fragment:dp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:vp,envmap_pars_fragment:xp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Lp,envmap_vertex:yp,fog_vertex:Sp,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Up,lights_phong_fragment:Dp,lights_phong_pars_fragment:Fp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Op,lights_fragment_begin:Np,lights_fragment_maps:kp,lights_fragment_end:Bp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Jp,morphcolor_vertex:$p,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:um,opaque_fragment:hm,packing:fm,premultiplied_alpha_fragment:dm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:ym,shadowmap_vertex:Sm,shadowmask_pars_fragment:Mm,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:wm,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Lm,transmission_fragment:Pm,transmission_pars_fragment:Um,uv_pars_fragment:Dm,uv_pars_vertex:Fm,uv_vertex:Im,worldpos_vertex:Om,background_vert:Nm,background_frag:km,backgroundCube_vert:Bm,backgroundCube_frag:Gm,cube_vert:zm,cube_frag:Hm,depth_vert:Vm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Km,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:eg,meshmatcap_vert:tg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:ag,meshphong_frag:sg,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:ug,points_vert:hg,points_frag:fg,shadow_vert:dg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},ge={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},hn={basic:{uniforms:Rt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Rt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Rt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Rt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Rt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Rt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Rt([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Rt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Rt([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Rt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Rt([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Rt([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Rt([ge.lights,ge.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};hn.physical={uniforms:Rt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ua={r:0,b:0,g:0},si=new en,vg=new st;function xg(n,e,t,i,r,a,s){const o=new Ke(0);let l=a===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function v(b){let x=!1;const M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===Xa)?(u===void 0&&(u=new qt(new rr(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:er(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),si.copy(x.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(si)),u.material.toneMapped=tt.getTransfer(M.colorSpace)!==at,(f!==M||h!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new qt(new Ka(2,2),new $n({name:"BackgroundMaterial",uniforms:er(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(ua,Nu(n)),i.buffers.color.setClear(ua.r,ua.g,ua.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m}}function _g(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(y,R,X,N,V){let W=!1;const z=f(N,X,R);a!==z&&(a=z,c(a.object)),W=d(y,N,X,V),W&&g(y,N,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,M(y,R,X,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,R,X){const N=X.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let W=V[R.id];W===void 0&&(W={},V[R.id]=W);let z=W[N];return z===void 0&&(z=h(l()),W[N]=z),z}function h(y){const R=[],X=[],N=[];for(let V=0;V<t;V++)R[V]=0,X[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,R,X,N){const V=a.attributes,W=R.attributes;let z=0;const q=X.getAttributes();for(const H in q)if(q[H].location>=0){const fe=V[H];let ie=W[H];if(ie===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),fe===void 0||fe.attribute!==ie||ie&&fe.data!==ie.data)return!0;z++}return a.attributesNum!==z||a.index!==N}function g(y,R,X,N){const V={},W=R.attributes;let z=0;const q=X.getAttributes();for(const H in q)if(q[H].location>=0){let fe=W[H];fe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const ie={};ie.attribute=fe,fe&&fe.data&&(ie.data=fe.data),V[H]=ie,z++}a.attributes=V,a.attributesNum=z,a.index=N}function v(){const y=a.newAttributes;for(let R=0,X=y.length;R<X;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const X=a.newAttributes,N=a.enabledAttributes,V=a.attributeDivisors;X[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),V[y]!==R&&(n.vertexAttribDivisor(y,R),V[y]=R)}function b(){const y=a.newAttributes,R=a.enabledAttributes;for(let X=0,N=R.length;X<N;X++)R[X]!==y[X]&&(n.disableVertexAttribArray(X),R[X]=0)}function x(y,R,X,N,V,W,z){z===!0?n.vertexAttribIPointer(y,R,X,V,W):n.vertexAttribPointer(y,R,X,N,V,W)}function M(y,R,X,N){v();const V=N.attributes,W=X.getAttributes(),z=R.defaultAttributeValues;for(const q in W){const H=W[q];if(H.location>=0){let se=V[q];if(se===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const fe=se.normalized,ie=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;const Je=Ce.buffer,Y=Ce.type,ae=Ce.bytesPerElement,Se=Y===n.INT||Y===n.UNSIGNED_INT||se.gpuType===Mu;if(se.isInterleavedBufferAttribute){const ce=se.data,Ie=ce.stride,Ve=se.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<H.locationSize;ze++)p(H.location+ze,ce.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<H.locationSize;ze++)m(H.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ze=0;ze<H.locationSize;ze++)x(H.location+ze,ie/H.locationSize,Y,fe,Ie*ae,(Ve+ie/H.locationSize*ze)*ae,Se)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce,se.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ce=0;ce<H.locationSize;ce++)x(H.location+ce,ie/H.locationSize,Y,fe,ie*ae,ie/H.locationSize*ce*ae,Se)}}else if(z!==void 0){const fe=z[q];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(H.location,fe);break;case 3:n.vertexAttrib3fv(H.location,fe);break;case 4:n.vertexAttrib4fv(H.location,fe);break;default:n.vertexAttrib1fv(H.location,fe)}}}}b()}function P(){C();for(const y in i){const R=i[y];for(const X in R){const N=R[X];for(const V in N)u(N[V].object),delete N[V];delete R[X]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const X in R){const N=R[X];for(const V in N)u(N[V].object),delete N[V];delete R[X]}delete i[y.id]}function T(y){for(const R in i){const X=i[R];if(X[y.id]===void 0)continue;const N=X[y.id];for(const V in N)u(N[V].object),delete N[V];delete X[y.id]}}function C(){E(),s=!0,a!==r&&(a=r,c(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function yg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(c[d],u[d]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Jn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wn&&!T)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:M,maxSamples:P}}function Mg(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Hn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const b=a?0:i,x=b*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,d);for(let P=0;P!==x;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==v;++x,M+=4)s.copy(f[x]).applyMatrix4(b,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bg(n){let e=new WeakMap;function t(s,o){return o===ro?s.mapping=Ki:o===ao&&(s.mapping=Ji),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===ro||o===ao)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Fd(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class zu extends ku{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,jl=[.125,.215,.35,.446,.526,.582],fi=20,Ls=new zu,Ql=new Ke;let Ps=null,Us=0,Ds=0,Fs=!1;const ci=(1+Math.sqrt(5))/2,ki=1/ci,ec=[new F(-ci,ki,0),new F(ci,ki,0),new F(-ki,0,ci),new F(ki,0,ci),new F(0,ci,-ki),new F(0,ci,ki),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ps=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ps,Us,Ds),this._renderer.xr.enabled=Fs,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ps=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:qa,format:dn,colorSpace:Qn,depthBuffer:!1},r=nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(a)),this._blurMaterial=Tg(a,e,t)}return r}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,i,r){const o=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Yn,u.autoClear=!1;const d=new Fu({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new qt(new rr,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Ql),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ha(r,b*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new qt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ls)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ec[(r-a-1)%ec.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new qt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*fi-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):fi;m>fi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let b=0;for(let T=0;T<fi;++T){const C=T/v,E=Math.exp(-C*C/2);p.push(E),T===0?b+=E:T<m&&(b+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const M=this._sizeLods[r],P=3*M*(r>x-Hi?r-x+Hi:0),w=4*(this._cubeSize-M);ha(t,P,w,3*M,2*M),l.setRenderTarget(t),l.render(f,Ls)}}function Eg(n){const e=[],t=[],i=[];let r=n;const a=n-Hi+1+jl.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-Hi?l=jl[s-n+Hi-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,C=w>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];b.set(E,v*g*w),x.set(h,m*g*w);const y=[w,w,w,w,w,w];M.set(y,p*g*w)}const P=new Nt;P.setAttribute("position",new Qt(b,v)),P.setAttribute("uv",new Qt(x,m)),P.setAttribute("faceIndex",new Qt(M,p)),e.push(P),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nc(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Tg(n,e,t){const i=new Float32Array(fi),r=new F(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ic(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function rc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===ao,u=l===Ki||l===Ji;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new tc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new tc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function wg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Lu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cg(n,e,t,i){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",s),delete r[h.id];const d=a.get(h);d&&(e.remove(d),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let x=0,M=b.length;x<M;x+=3){const P=b[x+0],w=b[x+1],T=b[x+2];h.push(P,w,w,T,T,P)}}else if(g!==void 0){const b=g.array;v=g.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const P=x+0,w=x+1,T=x+2;h.push(P,w,w,T,T,P)}}else return;const m=new(Ru(h)?Ou:Iu)(h,1);m.version=v;const p=a.get(f);p&&e.remove(p),a.set(f,m)}function u(f){const h=a.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Rg(n,e,t){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,d){n.drawElements(i,d,a,h*s),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,a,h*s,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(h[m]/s,d[m]);else{v.multiDrawElementsWEBGL(i,d,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Lg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Pg(n,e,t){const i=new WeakMap,r=new Mt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*w*4*f),C=new Uu(T,P,w,f);C.type=Wn,C.needsUpdate=!0;const E=M*4;for(let R=0;R<f;R++){const X=p[R],N=b[R],V=x[R],W=P*w*4*R;for(let z=0;z<X.count;z++){const q=z*E;g===!0&&(r.fromBufferAttribute(X,z),T[W+q+0]=r.x,T[W+q+1]=r.y,T[W+q+2]=r.z,T[W+q+3]=0),v===!0&&(r.fromBufferAttribute(N,z),T[W+q+4]=r.x,T[W+q+5]=r.y,T[W+q+6]=r.z,T[W+q+7]=0),m===!0&&(r.fromBufferAttribute(V,z),T[W+q+8]=r.x,T[W+q+9]=r.y,T[W+q+10]=r.z,T[W+q+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new de(P,w)},i.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function Ug(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Hu extends Lt{constructor(e,t,i,r,a,s,o,l,c,u=Xi){if(u!==Xi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xi&&(i=$i),i===void 0&&u===Qi&&(i=ji),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vu=new Lt,Wu=new Hu(1,1);Wu.compareFunction=Cu;const Xu=new Uu,qu=new xd,Yu=new Bu,ac=[],sc=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=ac[r];if(a===void 0&&(a=new Float32Array(r),ac[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;cc.set(i),n.uniformMatrix2fv(this.addr,!1,cc),vt(t,i)}}function kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;lc.set(i),n.uniformMatrix3fv(this.addr,!1,lc),vt(t,i)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;oc.set(i),n.uniformMatrix4fv(this.addr,!1,oc),vt(t,i)}}function Gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Wu:Vu;t.setTexture2D(e||a,r)}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qu,r)}function Jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yu,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xu,r)}function jg(n){switch(n){case 5126:return Dg;case 35664:return Fg;case 35665:return Ig;case 35666:return Og;case 35674:return Ng;case 35675:return kg;case 35676:return Bg;case 5124:case 35670:return Gg;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return $g}}function Qg(n,e){n.uniform1fv(this.addr,e)}function ev(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function tv(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function nv(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function iv(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rv(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function av(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sv(n,e){n.uniform1iv(this.addr,e)}function ov(n,e){n.uniform2iv(this.addr,e)}function lv(n,e){n.uniform3iv(this.addr,e)}function cv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function hv(n,e){n.uniform2uiv(this.addr,e)}function fv(n,e){n.uniform3uiv(this.addr,e)}function dv(n,e){n.uniform4uiv(this.addr,e)}function pv(n,e,t){const i=this.cache,r=e.length,a=Ja(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Vu,a[s])}function mv(n,e,t){const i=this.cache,r=e.length,a=Ja(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||qu,a[s])}function gv(n,e,t){const i=this.cache,r=e.length,a=Ja(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Yu,a[s])}function vv(n,e,t){const i=this.cache,r=e.length,a=Ja(t,r);gt(i,a)||(n.uniform1iv(this.addr,a),vt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Xu,a[s])}function xv(n){switch(n){case 5126:return Qg;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return sv;case 35667:case 35671:return ov;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return hv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return vv}}class _v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function uc(n,e){n.seq.push(e),n.map[e.id]=e}function Mv(n,e,t){const i=n.name,r=i.length;for(Is.lastIndex=0;;){const a=Is.exec(i),s=Is.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){uc(t,c===void 0?new _v(o,n,e):new yv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Sv(o),uc(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Mv(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bv=37297;let Ev=0;function Tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Av(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Fa&&t===Da?i="LinearDisplayP3ToLinearSRGB":e===Da&&t===Fa&&(i="LinearSRGBToLinearDisplayP3"),n){case Qn:case Ya:return[i,"LinearTransferOETF"];case $t:case Ro:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function fc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tv(n.getShaderSource(e),s)}else return r}function wv(n,e){const t=Av(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cv(n,e){let t;switch(e){case Of:t="Linear";break;case Nf:t="Reinhard";break;case kf:t="OptimizedCineon";break;case Bf:t="ACESFilmic";break;case zf:t="AgX";break;case Hf:t="Neutral";break;case Gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Lv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function gr(n){return n!==""}function dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(n){return n.replace(Uv,Fv)}const Dv=new Map;function Fv(n,e){let t=Xe[e];if(t===void 0){const i=Dv.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}const Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(n){return n.replace(Iv,Ov)}function Ov(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case If:e="ENVMAP_BLENDING_ADD";break}return e}function zv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hv(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Nv(t),c=kv(t),u=Bv(t),f=Gv(t),h=zv(t),d=Rv(t),g=Lv(a),v=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),s=co(s),s=dc(s,t),s=pc(s,t),o=co(o),o=dc(o,t),o=pc(o,t),s=mc(s),o=mc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+s,M=b+p+o,P=hc(r,r.VERTEX_SHADER,x),w=hc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,P),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(w).trim();let W=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,w);else{const q=fc(r,P,"vertex"),H=fc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+q+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||V==="")&&(z=!1);z&&(R.diagnostics={runnable:W,programLog:X,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(P),r.deleteShader(w),C=new Ta(r,v),E=Pv(r,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,bv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ev++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=w,this}let Vv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xv(e),t.set(e,i)),i}}class Xv{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}}function qv(n,e,t,i,r,a,s){const o=new Po,l=new Wv,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,R,X,N){const V=X.fog,W=N.geometry,z=E.isMeshStandardMaterial?X.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),H=q&&q.mapping===Xa?q.image.height:null,se=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=fe!==void 0?fe.length:0;let Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let Je,Y,ae,Se;if(se){const nt=hn[se];Je=nt.vertexShader,Y=nt.fragmentShader}else Je=E.vertexShader,Y=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),Se=l.getFragmentShaderID(E);const ce=n.getRenderTarget(),Ie=N.isInstancedMesh===!0,Ve=N.isBatchedMesh===!0,ze=!!E.map,L=!!E.matcap,J=!!q,ee=!!E.aoMap,oe=!!E.lightMap,ne=!!E.bumpMap,re=!!E.normalMap,Me=!!E.displacementMap,xe=!!E.emissiveMap,He=!!E.metalnessMap,A=!!E.roughnessMap,_=E.anisotropy>0,G=E.clearcoat>0,Q=E.dispersion>0,j=E.iridescence>0,te=E.sheen>0,Ue=E.transmission>0,me=_&&!!E.anisotropyMap,ve=G&&!!E.clearcoatMap,We=G&&!!E.clearcoatNormalMap,le=G&&!!E.clearcoatRoughnessMap,Re=j&&!!E.iridescenceMap,Ze=j&&!!E.iridescenceThicknessMap,Be=te&&!!E.sheenColorMap,_e=te&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,$e=!!E.specularColorMap,ft=!!E.specularIntensityMap,U=Ue&&!!E.transmissionMap,be=Ue&&!!E.thicknessMap,Z=!!E.gradientMap,$=!!E.alphaMap,he=E.alphaTest>0,Ge=!!E.alphaHash,je=!!E.extensions;let dt=Yn;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(dt=n.toneMapping);const xt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:Y,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Qn,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:L,envMap:J,envMapMode:J&&q.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:oe,bumpMap:ne,normalMap:re,displacementMap:h&&Me,emissiveMap:xe,normalMapObjectSpace:re&&E.normalMapType===nd,normalMapTangentSpace:re&&E.normalMapType===Co,metalnessMap:He,roughnessMap:A,anisotropy:_,anisotropyMap:me,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:We,clearcoatRoughnessMap:le,dispersion:Q,iridescence:j,iridescenceMap:Re,iridescenceThicknessMap:Ze,sheen:te,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:$e,specularIntensityMap:ft,transmission:Ue,transmissionMap:U,thicknessMap:be,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Wi&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:Ge,combine:E.combine,mapUv:ze&&v(E.map.channel),aoMapUv:ee&&v(E.aoMap.channel),lightMapUv:oe&&v(E.lightMap.channel),bumpMapUv:ne&&v(E.bumpMap.channel),normalMapUv:re&&v(E.normalMap.channel),displacementMapUv:Me&&v(E.displacementMap.channel),emissiveMapUv:xe&&v(E.emissiveMap.channel),metalnessMapUv:He&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:me&&v(E.anisotropyMap.channel),clearcoatMapUv:ve&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(E.sheenRoughnessMap.channel),specularMapUv:Ye&&v(E.specularMap.channel),specularColorMapUv:$e&&v(E.specularColorMap.channel),specularIntensityMapUv:ft&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:be&&v(E.thicknessMap.channel),alphaMapUv:$&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(re||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ze||$),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:je&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(y,E),x(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),E.push(o.mask)}function M(E){const y=g[E.type];let R;if(y){const X=hn[y];R=Ld.clone(X.uniforms)}else R=E.uniforms;return R}function P(E,y){let R;for(let X=0,N=u.length;X<N;X++){const V=u[X];if(V.cacheKey===y){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Hv(n,y,E,a),u.push(R)),R}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function Yv(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(f,h,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,h,d,g,v,m){const p=s(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,v,m){const p=s(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Zv),i.length>1&&i.sort(h||vc),r.length>1&&r.sort(h||vc)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function Kv(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new xc,n.set(i,[s])):r>=a.length?(s=new xc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ke};break;case"SpotLight":t={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function $v(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jv=0;function Qv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e0(n){const e=new Jv,t=$v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,a=new st,s=new st;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,x=0,M=0,P=0,w=0,T=0;c.sort(Qv);for(let E=0,y=c.length;E<y;E++){const R=c[E],X=R.color,N=R.intensity,V=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=X.r*N,f+=X.g*N,h+=X.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],N);T++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,H=t.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=R.shadow.matrix,b++}i.directional[d]=z,d++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(X).multiplyScalar(N),z.distance=V,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[v]=z;const q=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,q.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=q.matrix,R.castShadow){const H=t.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=W,M++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(X).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const q=R.shadow,H=t.get(R);H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==P||C.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=P,C.numLightProbes=T,i.version=jv++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(x.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),s.identity(),a.copy(x.matrixWorld),a.premultiply(m),s.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function _c(n){const e=new e0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function t0(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new _c(n),e.set(r,[o])):a>=s.length?(o=new _c(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class n0 extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i0 extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s0(n,e,t){let i=new Uo;const r=new de,a=new de,s=new Mt,o=new n0({depthPacking:td}),l=new i0,c={},u=t.maxTextureSize,f={[Kn]:Dt,[Dt]:Kn,[Tn]:Tn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),X=n.state;X.setBlending(qn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const N=p!==En&&this.type===En,V=p===En&&this.type!==En;for(let W=0,z=w.length;W<z;W++){const q=w[W],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const se=H.getFrameExtents();if(r.multiply(se),a.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/se.x),r.x=a.x*se.x,H.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/se.y),r.y=a.y*se.y,H.mapSize.y=a.y)),H.map===null||N===!0||V===!0){const ie=this.type!==En?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new xi(r.x,r.y,ie),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const fe=H.getViewportCount();for(let ie=0;ie<fe;ie++){const Ce=H.getViewport(ie);s.set(a.x*Ce.x,a.y*Ce.y,a.x*Ce.z,a.y*Ce.w),X.viewport(s),H.updateMatrices(q,ie),i=H.getFrustum(),M(T,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===En&&b(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,R)};function b(w,T){const C=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,C,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,C,d,v,null)}function x(w,T,C,E){let y=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=y.uuid,N=T.uuid;let V=c[X];V===void 0&&(V={},c[X]=V);let W=V[N];W===void 0&&(W=y.clone(),V[N]=W,T.addEventListener("dispose",P)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,E===En?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=n.properties.get(y);X.light=C}return y}function M(w,T,C,E,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===En)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=e.update(w),V=w.material;if(Array.isArray(V)){const W=N.groups;for(let z=0,q=W.length;z<q;z++){const H=W[z],se=V[H.materialIndex];if(se&&se.visible){const fe=x(w,se,E,y);w.onBeforeShadow(n,w,T,C,N,fe,H),n.renderBufferDirect(C,null,N,fe,w,H),w.onAfterShadow(n,w,T,C,N,fe,H)}}}else if(V.visible){const W=x(w,V,E,y);w.onBeforeShadow(n,w,T,C,N,W,null),n.renderBufferDirect(C,null,N,W,w,null),w.onAfterShadow(n,w,T,C,N,W,null)}}const X=w.children;for(let N=0,V=X.length;N<V;N++)M(X[N],T,C,E,y)}function P(w){w.target.removeEventListener("dispose",P);for(const C in c){const E=c[C],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function o0(n){function e(){let U=!1;const be=new Mt;let Z=null;const $=new Mt(0,0,0,0);return{setMask:function(he){Z!==he&&!U&&(n.colorMask(he,he,he,he),Z=he)},setLocked:function(he){U=he},setClear:function(he,Ge,je,dt,xt){xt===!0&&(he*=dt,Ge*=dt,je*=dt),be.set(he,Ge,je,dt),$.equals(be)===!1&&(n.clearColor(he,Ge,je,dt),$.copy(be))},reset:function(){U=!1,Z=null,$.set(-1,0,0,0)}}}function t(){let U=!1,be=null,Z=null,$=null;return{setTest:function(he){he?Se(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(he){be!==he&&!U&&(n.depthMask(he),be=he)},setFunc:function(he){if(Z!==he){switch(he){case wf:n.depthFunc(n.NEVER);break;case Cf:n.depthFunc(n.ALWAYS);break;case Rf:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case Lf:n.depthFunc(n.EQUAL);break;case Pf:n.depthFunc(n.GEQUAL);break;case Uf:n.depthFunc(n.GREATER);break;case Df:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=he}},setLocked:function(he){U=he},setClear:function(he){$!==he&&(n.clearDepth(he),$=he)},reset:function(){U=!1,be=null,Z=null,$=null}}}function i(){let U=!1,be=null,Z=null,$=null,he=null,Ge=null,je=null,dt=null,xt=null;return{setTest:function(nt){U||(nt?Se(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(nt){be!==nt&&!U&&(n.stencilMask(nt),be=nt)},setFunc:function(nt,on,ln){(Z!==nt||$!==on||he!==ln)&&(n.stencilFunc(nt,on,ln),Z=nt,$=on,he=ln)},setOp:function(nt,on,ln){(Ge!==nt||je!==on||dt!==ln)&&(n.stencilOp(nt,on,ln),Ge=nt,je=on,dt=ln)},setLocked:function(nt){U=nt},setClear:function(nt){xt!==nt&&(n.clearStencil(nt),xt=nt)},reset:function(){U=!1,be=null,Z=null,$=null,he=null,Ge=null,je=null,dt=null,xt=null}}}const r=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,b=null,x=null,M=null,P=null,w=new Ke(0,0,0),T=0,C=!1,E=null,y=null,R=null,X=null,N=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=z>=2);let H=null,se={};const fe=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ce=new Mt().fromArray(fe),Je=new Mt().fromArray(ie);function Y(U,be,Z,$){const he=new Uint8Array(4),Ge=n.createTexture();n.bindTexture(U,Ge),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Z;je++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(be+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Ge}const ae={};ae[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Se(n.DEPTH_TEST),a.setFunc(La),ne(!1),re(el),Se(n.CULL_FACE),ee(qn);function Se(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function ce(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Ie(U,be){return u[U]!==be?(n.bindFramebuffer(U,be),u[U]=be,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Ve(U,be){let Z=h,$=!1;if(U){Z=f.get(be),Z===void 0&&(Z=[],f.set(be,Z));const he=U.textures;if(Z.length!==he.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Ge=0,je=he.length;Ge<je;Ge++)Z[Ge]=n.COLOR_ATTACHMENT0+Ge;Z.length=he.length,$=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,$=!0);$&&n.drawBuffers(Z)}function ze(U){return d!==U?(n.useProgram(U),d=U,!0):!1}const L={[hi]:n.FUNC_ADD,[uf]:n.FUNC_SUBTRACT,[hf]:n.FUNC_REVERSE_SUBTRACT};L[ff]=n.MIN,L[df]=n.MAX;const J={[pf]:n.ZERO,[mf]:n.ONE,[gf]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[io]:n.ONE_MINUS_SRC_ALPHA,[Sf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[bf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[Tf]:n.CONSTANT_ALPHA,[Af]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(U,be,Z,$,he,Ge,je,dt,xt,nt){if(U===qn){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(Se(n.BLEND),g=!0),U!==cf){if(U!==v||nt!==C){if((m!==hi||x!==hi)&&(n.blendEquation(n.FUNC_ADD),m=hi,x=hi),nt)switch(U){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFunc(n.ONE,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,b=null,M=null,P=null,w.set(0,0,0),T=0,v=U,C=nt}return}he=he||be,Ge=Ge||Z,je=je||$,(be!==m||he!==x)&&(n.blendEquationSeparate(L[be],L[he]),m=be,x=he),(Z!==p||$!==b||Ge!==M||je!==P)&&(n.blendFuncSeparate(J[Z],J[$],J[Ge],J[je]),p=Z,b=$,M=Ge,P=je),(dt.equals(w)===!1||xt!==T)&&(n.blendColor(dt.r,dt.g,dt.b,xt),w.copy(dt),T=xt),v=U,C=!1}function oe(U,be){U.side===Tn?ce(n.CULL_FACE):Se(n.CULL_FACE);let Z=U.side===Dt;be&&(Z=!Z),ne(Z),U.blending===Wi&&U.transparent===!1?ee(qn):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const $=U.stencilWrite;s.setTest($),$&&(s.setMask(U.stencilWriteMask),s.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),s.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function re(U){U!==sf?(Se(n.CULL_FACE),U!==y&&(U===el?n.cullFace(n.BACK):U===of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),y=U}function Me(U){U!==R&&(W&&n.lineWidth(U),R=U)}function xe(U,be,Z){U?(Se(n.POLYGON_OFFSET_FILL),(X!==be||N!==Z)&&(n.polygonOffset(be,Z),X=be,N=Z)):ce(n.POLYGON_OFFSET_FILL)}function He(U){U?Se(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function A(U){U===void 0&&(U=n.TEXTURE0+V-1),H!==U&&(n.activeTexture(U),H=U)}function _(U,be,Z){Z===void 0&&(H===null?Z=n.TEXTURE0+V-1:Z=H);let $=se[Z];$===void 0&&($={type:void 0,texture:void 0},se[Z]=$),($.type!==U||$.texture!==be)&&(H!==Z&&(n.activeTexture(Z),H=Z),n.bindTexture(U,be||ae[U]),$.type=U,$.texture=be)}function G(){const U=se[H];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){Ce.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ce.copy(U))}function _e(U){Je.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Je.copy(U))}function Ye(U,be){let Z=l.get(be);Z===void 0&&(Z=new WeakMap,l.set(be,Z));let $=Z.get(U);$===void 0&&($=n.getUniformBlockIndex(be,U.name),Z.set(U,$))}function $e(U,be){const $=l.get(be).get(U);o.get(be)!==$&&(n.uniformBlockBinding(be,$,U.__bindingPointIndex),o.set(be,$))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},H=null,se={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,b=null,x=null,M=null,P=null,w=new Ke(0,0,0),T=0,C=!1,E=null,y=null,R=null,X=null,N=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:Se,disable:ce,bindFramebuffer:Ie,drawBuffers:Ve,useProgram:ze,setBlending:ee,setMaterial:oe,setFlipSided:ne,setCullFace:re,setLineWidth:Me,setPolygonOffset:xe,setScissorTest:He,activeTexture:A,bindTexture:_,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:Re,texImage3D:Ze,updateUBOMapping:Ye,uniformBlockBinding:$e,texStorage2D:We,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ue,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:Be,viewport:_e,reset:ft}}function l0(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return d?new OffscreenCanvas(A,_):Er("canvas")}function v(A,_,G){let Q=1;const j=He(A);if((j.width>G||j.height>G)&&(Q=G/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const te=Math.floor(Q*j.width),Ue=Math.floor(Q*j.height);f===void 0&&(f=g(te,Ue));const me=_?g(te,Ue):f;return me.width=te,me.height=Ue,me.getContext("2d").drawImage(A,0,0,te,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+te+"x"+Ue+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Xt&&A.minFilter!==jt}function p(A){n.generateMipmap(A)}function b(A,_,G,Q,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=_;if(_===n.RED&&(G===n.FLOAT&&(te=n.R32F),G===n.HALF_FLOAT&&(te=n.R16F),G===n.UNSIGNED_BYTE&&(te=n.R8)),_===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.R8UI),G===n.UNSIGNED_SHORT&&(te=n.R16UI),G===n.UNSIGNED_INT&&(te=n.R32UI),G===n.BYTE&&(te=n.R8I),G===n.SHORT&&(te=n.R16I),G===n.INT&&(te=n.R32I)),_===n.RG&&(G===n.FLOAT&&(te=n.RG32F),G===n.HALF_FLOAT&&(te=n.RG16F),G===n.UNSIGNED_BYTE&&(te=n.RG8)),_===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(te=n.RG8UI),G===n.UNSIGNED_SHORT&&(te=n.RG16UI),G===n.UNSIGNED_INT&&(te=n.RG32UI),G===n.BYTE&&(te=n.RG8I),G===n.SHORT&&(te=n.RG16I),G===n.INT&&(te=n.RG32I)),_===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),_===n.RGBA){const Ue=j?Ua:tt.getTransfer(Q);G===n.FLOAT&&(te=n.RGBA32F),G===n.HALF_FLOAT&&(te=n.RGBA16F),G===n.UNSIGNED_BYTE&&(te=Ue===at?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(A,_){let G;return A?_===null||_===$i||_===ji?G=n.DEPTH24_STENCIL8:_===Wn?G=n.DEPTH32F_STENCIL8:_===Pa&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===ji?G=n.DEPTH_COMPONENT24:_===Wn?G=n.DEPTH_COMPONENT32F:_===Pa&&(G=n.DEPTH_COMPONENT16),G}function M(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){const _=A.target;_.removeEventListener("dispose",P),T(_),_.isVideoTexture&&u.delete(_)}function w(A){const _=A.target;_.removeEventListener("dispose",w),E(_)}function T(A){const _=i.get(A);if(_.__webglInit===void 0)return;const G=A.source,Q=h.get(G);if(Q){const j=Q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(A),Object.keys(Q).length===0&&h.delete(G)}i.remove(A)}function C(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const G=A.source,Q=h.get(G);delete Q[_.__cacheKey],s.memory.textures--}function E(A){const _=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let j=0;j<_.__webglFramebuffer[Q].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[Q][j]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,j=G.length;Q<j;Q++){const te=i.get(G[Q]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),s.memory.textures--),i.remove(G[Q])}i.remove(A)}let y=0;function R(){y=0}function X(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function N(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){const G=i.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(G,A,_);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+_)}function W(A,_){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Je(G,A,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+_)}function z(A,_){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Je(G,A,_);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+_)}function q(A,_){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Y(G,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+_)}const H={[so]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},se={[Xt]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[rs]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},fe={[id]:n.NEVER,[cd]:n.ALWAYS,[rd]:n.LESS,[Cu]:n.LEQUAL,[ad]:n.EQUAL,[ld]:n.GEQUAL,[sd]:n.GREATER,[od]:n.NOTEQUAL};function ie(A,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===rs||_.magFilter===Wr||_.magFilter===vi||_.minFilter===jt||_.minFilter===rs||_.minFilter===Wr||_.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,H[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,H[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,H[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,se[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,se[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Wr&&_.minFilter!==vi||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));const Q=_.source;let j=h.get(Q);j===void 0&&(j={},h.set(Q,j));const te=N(_);if(te!==A.__cacheKey){j[te]===void 0&&(j[te]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,G=!0),j[te].usedTimes++;const Ue=j[A.__cacheKey];Ue!==void 0&&(j[A.__cacheKey].usedTimes--,Ue.usedTimes===0&&C(_)),A.__cacheKey=te,A.__webglTexture=j[te].texture}return G}function Je(A,_,G){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const j=Ce(A,_),te=_.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+G);const Ue=i.get(te);if(te.version!==Ue.__version||j===!0){t.activeTexture(n.TEXTURE0+G);const me=tt.getPrimaries(tt.workingColorSpace),ve=_.colorSpace===Vn?null:tt.getPrimaries(_.colorSpace),We=_.colorSpace===Vn||me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let le=v(_.image,!1,r.maxTextureSize);le=xe(_,le);const Re=a.convert(_.format,_.colorSpace),Ze=a.convert(_.type);let Be=b(_.internalFormat,Re,Ze,_.colorSpace,_.isVideoTexture);ie(Q,_);let _e;const Ye=_.mipmaps,$e=_.isVideoTexture!==!0,ft=Ue.__version===void 0||j===!0,U=te.dataReady,be=M(_,le);if(_.isDepthTexture)Be=x(_.format===Qi,_.type),ft&&($e?t.texStorage2D(n.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,Re,Ze,null));else if(_.isDataTexture)if(Ye.length>0){$e&&ft&&t.texStorage2D(n.TEXTURE_2D,be,Be,Ye[0].width,Ye[0].height);for(let Z=0,$=Ye.length;Z<$;Z++)_e=Ye[Z],$e?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,Z,Be,_e.width,_e.height,0,Re,Ze,_e.data);_.generateMipmaps=!1}else $e?(ft&&t.texStorage2D(n.TEXTURE_2D,be,Be,le.width,le.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Re,Ze,le.data)):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,Re,Ze,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Be,Ye[0].width,Ye[0].height,le.depth);for(let Z=0,$=Ye.length;Z<$;Z++)if(_e=Ye[Z],_.format!==dn)if(Re!==null)if($e){if(U)if(_.layerUpdates.size>0){for(const he of _.layerUpdates){const Ge=_e.width*_e.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,he,_e.width,_e.height,1,Re,_e.data.slice(Ge*he,Ge*(he+1)),0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,le.depth,Re,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Be,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,le.depth,Re,Ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Be,_e.width,_e.height,le.depth,0,Re,Ze,_e.data)}else{$e&&ft&&t.texStorage2D(n.TEXTURE_2D,be,Be,Ye[0].width,Ye[0].height);for(let Z=0,$=Ye.length;Z<$;Z++)_e=Ye[Z],_.format!==dn?Re!==null?$e?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,Ze,_e.data):t.texImage2D(n.TEXTURE_2D,Z,Be,_e.width,_e.height,0,Re,Ze,_e.data)}else if(_.isDataArrayTexture)if($e){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Be,le.width,le.height,le.depth),U)if(_.layerUpdates.size>0){let Z;switch(Ze){case n.UNSIGNED_BYTE:switch(Re){case n.ALPHA:Z=1;break;case n.LUMINANCE:Z=1;break;case n.LUMINANCE_ALPHA:Z=2;break;case n.RGB:Z=3;break;case n.RGBA:Z=4;break;default:throw new Error(`Unknown texel size for format ${Re}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:Z=1;break;default:throw new Error(`Unknown texel size for type ${Ze}.`)}const $=le.width*le.height*Z;for(const he of _.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,le.width,le.height,1,Re,Ze,le.data.slice($*he,$*(he+1)));_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Re,Ze,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,Re,Ze,le.data);else if(_.isData3DTexture)$e?(ft&&t.texStorage3D(n.TEXTURE_3D,be,Be,le.width,le.height,le.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Re,Ze,le.data)):t.texImage3D(n.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,Re,Ze,le.data);else if(_.isFramebufferTexture){if(ft)if($e)t.texStorage2D(n.TEXTURE_2D,be,Be,le.width,le.height);else{let Z=le.width,$=le.height;for(let he=0;he<be;he++)t.texImage2D(n.TEXTURE_2D,he,Be,Z,$,0,Re,Ze,null),Z>>=1,$>>=1}}else if(Ye.length>0){if($e&&ft){const Z=He(Ye[0]);t.texStorage2D(n.TEXTURE_2D,be,Be,Z.width,Z.height)}for(let Z=0,$=Ye.length;Z<$;Z++)_e=Ye[Z],$e?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Re,Ze,_e):t.texImage2D(n.TEXTURE_2D,Z,Be,Re,Ze,_e);_.generateMipmaps=!1}else if($e){if(ft){const Z=He(le);t.texStorage2D(n.TEXTURE_2D,be,Be,Z.width,Z.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ze,le)}else t.texImage2D(n.TEXTURE_2D,0,Be,Re,Ze,le);m(_)&&p(Q),Ue.__version=te.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Y(A,_,G){if(_.image.length!==6)return;const Q=Ce(A,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const te=i.get(j);if(j.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const Ue=tt.getPrimaries(tt.workingColorSpace),me=_.colorSpace===Vn?null:tt.getPrimaries(_.colorSpace),ve=_.colorSpace===Vn||Ue===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const We=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,Re=[];for(let $=0;$<6;$++)!We&&!le?Re[$]=v(_.image[$],!0,r.maxCubemapSize):Re[$]=le?_.image[$].image:_.image[$],Re[$]=xe(_,Re[$]);const Ze=Re[0],Be=a.convert(_.format,_.colorSpace),_e=a.convert(_.type),Ye=b(_.internalFormat,Be,_e,_.colorSpace),$e=_.isVideoTexture!==!0,ft=te.__version===void 0||Q===!0,U=j.dataReady;let be=M(_,Ze);ie(n.TEXTURE_CUBE_MAP,_);let Z;if(We){$e&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ye,Ze.width,Ze.height);for(let $=0;$<6;$++){Z=Re[$].mipmaps;for(let he=0;he<Z.length;he++){const Ge=Z[he];_.format!==dn?Be!==null?$e?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ge.width,Ge.height,Be,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ye,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ge.width,Ge.height,Be,_e,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ye,Ge.width,Ge.height,0,Be,_e,Ge.data)}}}else{if(Z=_.mipmaps,$e&&ft){Z.length>0&&be++;const $=He(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ye,$.width,$.height)}for(let $=0;$<6;$++)if(le){$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re[$].width,Re[$].height,Be,_e,Re[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ye,Re[$].width,Re[$].height,0,Be,_e,Re[$].data);for(let he=0;he<Z.length;he++){const je=Z[he].image[$].image;$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,je.width,je.height,Be,_e,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ye,je.width,je.height,0,Be,_e,je.data)}}else{$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Be,_e,Re[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ye,Be,_e,Re[$]);for(let he=0;he<Z.length;he++){const Ge=Z[he];$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Be,_e,Ge.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ye,Be,_e,Ge.image[$])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),te.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ae(A,_,G,Q,j,te){const Ue=a.convert(G.format,G.colorSpace),me=a.convert(G.type),ve=b(G.internalFormat,Ue,me,G.colorSpace);if(!i.get(_).__hasExternalTextures){const le=Math.max(1,_.width>>te),Re=Math.max(1,_.height>>te);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,te,ve,le,Re,_.depth,0,Ue,me,null):t.texImage2D(j,te,ve,le,Re,0,Ue,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,i.get(G).__webglTexture,0,ne(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,i.get(G).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(A,_,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const Q=_.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,te=x(_.stencilBuffer,j),Ue=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ne(_);re(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,te,_.width,_.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,A)}else{const Q=_.textures;for(let j=0;j<Q.length;j++){const te=Q[j],Ue=a.convert(te.format,te.colorSpace),me=a.convert(te.type),ve=b(te.internalFormat,Ue,me,te.colorSpace),We=ne(_);G&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ve,_.width,_.height):re(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,ve,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ve,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const Q=i.get(_.depthTexture).__webglTexture,j=ne(_);if(_.depthTexture.format===Xi)re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Qi)re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const _=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,A)}else if(G){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=n.createRenderbuffer(),Se(_.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Se(_.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(A,_,G){const Q=i.get(A);_!==void 0&&ae(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ie(A)}function ze(A){const _=A.texture,G=i.get(A),Q=i.get(_);A.addEventListener("dispose",w);const j=A.textures,te=A.isWebGLCubeRenderTarget===!0,Ue=j.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,s.memory.textures++),te){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let ve=0;ve<_.mipmaps.length;ve++)G.__webglFramebuffer[me][ve]=n.createFramebuffer()}else G.__webglFramebuffer[me]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<_.mipmaps.length;me++)G.__webglFramebuffer[me]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let me=0,ve=j.length;me<ve;me++){const We=i.get(j[me]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),s.memory.textures++)}if(A.samples>0&&re(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<j.length;me++){const ve=j[me];G.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const We=a.convert(ve.format,ve.colorSpace),le=a.convert(ve.type),Re=b(ve.internalFormat,We,le,ve.colorSpace,A.isXRRenderTarget===!0),Ze=ne(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Re,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,G.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(n.TEXTURE_CUBE_MAP,_);for(let me=0;me<6;me++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ae(G.__webglFramebuffer[me][ve],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else ae(G.__webglFramebuffer[me],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let me=0,ve=j.length;me<ve;me++){const We=j[me],le=i.get(We);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ie(n.TEXTURE_2D,We),ae(G.__webglFramebuffer,A,We,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(We)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),ie(me,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ae(G.__webglFramebuffer[ve],A,_,n.COLOR_ATTACHMENT0,me,ve);else ae(G.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,me,0);m(_)&&p(me),t.unbindTexture()}A.depthBuffer&&Ie(A)}function L(A){const _=A.textures;for(let G=0,Q=_.length;G<Q;G++){const j=_[G];if(m(j)){const te=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ue=i.get(j).__webglTexture;t.bindTexture(te,Ue),p(te),t.unbindTexture()}}}const J=[],ee=[];function oe(A){if(A.samples>0){if(re(A)===!1){const _=A.textures,G=A.width,Q=A.height;let j=n.COLOR_BUFFER_BIT;const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(A),me=_.length>1;if(me)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ve]);const We=i.get(_[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,j,n.NEAREST),l===!0&&(J.length=0,ee.length=0,J.push(n.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push(te),ee.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ve]);const We=i.get(_[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ne(A){return Math.min(r.maxSamples,A.samples)}function re(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(A){const _=s.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function xe(A,_){const G=A.colorSpace,Q=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Qn&&G!==Vn&&(tt.getTransfer(G)===at?(Q!==dn||j!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=R,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=re}function c0(n,e){function t(i,r=Vn){let a;const s=tt.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Pa)return n.UNSIGNED_SHORT;if(i===Mu)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===qa)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===Zf)return n.RGB;if(i===dn)return n.RGBA;if(i===Kf)return n.LUMINANCE;if(i===Jf)return n.LUMINANCE_ALPHA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===$f)return n.RED;if(i===Tu)return n.RED_INTEGER;if(i===jf)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===wu)return n.RGBA_INTEGER;if(i===as||i===ss||i===os||i===ls)if(s===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===as)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===as)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ss)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===sl||i===ol)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===ul)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ll||i===cl)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ul)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hl||i===fl||i===dl||i===pl||i===ml||i===gl||i===vl||i===xl||i===_l||i===yl||i===Sl||i===Ml||i===bl||i===El)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===hl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cs||i===Tl||i===Al)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===cs)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===wl||i===Cl||i===Rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===cs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class u0 extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Lt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $n({vertexShader:f0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class m0 extends nr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new p0,m=t.getContextAttributes();let p=null,b=null;const x=[],M=[],P=new de;let w=null;const T=new Vt;T.layers.enable(1),T.viewport=new Mt;const C=new Vt;C.layers.enable(2),C.viewport=new Mt;const E=[T,C],y=new u0;y.layers.enable(1),y.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Os,x[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Os,x[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Os,x[Y]=ae),ae.getHandSpace()};function N(Y){const ae=M.indexOf(Y.inputSource);if(ae===-1)return;const Se=x[ae];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||s),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<x.length;Y++){const ae=M[Y];ae!==null&&(M[Y]=null,x[Y].disconnect(ae))}R=null,X=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,b=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new xi(d.framebufferWidth,d.framebufferHeight,{format:dn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Se=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Qi:Xi,Se=m.stencil?ji:$i);const Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new xi(h.textureWidth,h.textureHeight,{format:dn,type:Jn,depthTexture:new Hu(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(Y){for(let ae=0;ae<Y.removed.length;ae++){const Se=Y.removed[ae],ce=M.indexOf(Se);ce>=0&&(M[ce]=null,x[ce].disconnect(Se))}for(let ae=0;ae<Y.added.length;ae++){const Se=Y.added[ae];let ce=M.indexOf(Se);if(ce===-1){for(let Ve=0;Ve<x.length;Ve++)if(Ve>=M.length){M.push(Se),ce=Ve;break}else if(M[Ve]===null){M[Ve]=Se,ce=Ve;break}if(ce===-1)break}const Ie=x[ce];Ie&&Ie.connect(Se)}}const z=new F,q=new F;function H(Y,ae,Se){z.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(Se.matrixWorld);const ce=z.distanceTo(q),Ie=ae.projectionMatrix.elements,Ve=Se.projectionMatrix.elements,ze=Ie[14]/(Ie[10]-1),L=Ie[14]/(Ie[10]+1),J=(Ie[9]+1)/Ie[5],ee=(Ie[9]-1)/Ie[5],oe=(Ie[8]-1)/Ie[0],ne=(Ve[8]+1)/Ve[0],re=ze*oe,Me=ze*ne,xe=ce/(-oe+ne),He=xe*-oe;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(He),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=ze+xe,_=L+xe,G=re-He,Q=Me+(ce-He),j=J*L/_*A,te=ee*L/_*A;Y.projectionMatrix.makePerspective(G,Q,j,te,A,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function se(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),y.near=C.near=T.near=Y.near,y.far=C.far=T.far=Y.far,(R!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,X=y.far,T.near=R,T.far=X,C.near=R,C.far=X,T.updateProjectionMatrix(),C.updateProjectionMatrix(),Y.updateProjectionMatrix());const ae=Y.parent,Se=y.cameras;se(y,ae);for(let ce=0;ce<Se.length;ce++)se(Se[ce],ae);Se.length===2?H(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),fe(Y,y,ae)};function fe(Y,ae,Se){Se===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=lo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ie=null;function Ce(Y,ae){if(u=ae.getViewerPose(c||s),g=ae,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let ce=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ve=0;Ve<Se.length;Ve++){const ze=Se[Ve];let L=null;if(d!==null)L=d.getViewport(ze);else{const ee=f.getViewSubImage(h,ze);L=ee.viewport,Ve===0&&(e.setRenderTargetTextures(b,ee.colorTexture,h.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(b))}let J=E[Ve];J===void 0&&(J=new Vt,J.layers.enable(Ve),J.viewport=new Mt,E[Ve]=J),J.matrix.fromArray(ze.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ze.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(L.x,L.y,L.width,L.height),Ve===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(J)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ve=f.getDepthInformation(Se[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,r.renderState)}}for(let Se=0;Se<x.length;Se++){const ce=M[Se],Ie=x[Se];ce!==null&&Ie!==void 0&&Ie.update(ce,ae,c||s)}ie&&ie(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Je=new Gu;Je.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const oi=new en,g0=new st;function v0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Nu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),f(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),x=b.envMap,M=b.envMapRotation;x&&(m.envMap.value=x,oi.copy(M),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function x0(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const M=x.program;i.uniformBlockBinding(b,M)}function c(b,x){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(b,P);const w=e.render.frame;a[b.id]!==w&&(h(b),a[b.id]=w)}function u(b){const x=f();b.__bindingPointIndex=x;const M=n.createBuffer(),P=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const x=r[b.id],M=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,T=M.length;w<T;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,y=C.length;E<y;E++){const R=C[E];if(d(R,w,E,P)===!0){const X=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let W=0;W<N.length;W++){const z=N[W],q=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,X+V,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,M,P){const w=b.value,T=x+"_"+M;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{const C=P[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(b){const x=b.uniforms;let M=0;const P=16;for(let T=0,C=x.length;T<C;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,R=E.length;y<R;y++){const X=E[y],N=Array.isArray(X.value)?X.value:[X.value];for(let V=0,W=N.length;V<W;V++){const z=N[V],q=v(z),H=M%P;H!==0&&P-H<q.boundary&&(M+=P-H),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=q.storage}}}const w=M%P;return w>0&&(M+=P-w),b.__size=M,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}class _0{constructor(e={}){const{canvas:t=hd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let M=!1,P=0,w=0,T=null,C=-1,E=null;const y=new Mt,R=new Mt;let X=null;const N=new Ke(0);let V=0,W=t.width,z=t.height,q=1,H=null,se=null;const fe=new Mt(0,0,W,z),ie=new Mt(0,0,W,z);let Ce=!1;const Je=new Uo;let Y=!1,ae=!1;const Se=new st,ce=new F,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ze(){return T===null?q:1}let L=i;function J(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",$,!1),L===null){const D="webgl2";if(L=J(D,S),L===null)throw J(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ee,oe,ne,re,Me,xe,He,A,_,G,Q,j,te,Ue,me,ve,We,le,Re,Ze,Be,_e,Ye,$e;function ft(){ee=new wg(L),ee.init(),_e=new c0(L,ee),oe=new Sg(L,ee,e,_e),ne=new o0(L),re=new Lg(L),Me=new Yv,xe=new l0(L,ee,ne,Me,oe,_e,re),He=new bg(x),A=new Ag(x),_=new Nd(L),Ye=new _g(L,_),G=new Cg(L,_,re,Ye),Q=new Ug(L,G,_,re),Re=new Pg(L,oe,xe),ve=new Mg(Me),j=new qv(x,He,A,ee,oe,Ye,ve),te=new v0(x,Me),Ue=new Kv,me=new t0(ee),le=new xg(x,He,A,ne,Q,h,l),We=new s0(x,Q,oe),$e=new x0(L,re,oe,ne),Ze=new yg(L,ee,re),Be=new Rg(L,ee,re),re.programs=j.programs,x.capabilities=oe,x.extensions=ee,x.properties=Me,x.renderLists=Ue,x.shadowMap=We,x.state=ne,x.info=re}ft();const U=new m0(x,L);this.xr=U,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(W,z,!1))},this.getSize=function(S){return S.set(W,z)},this.setSize=function(S,D,k=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,z=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),k===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*q,z*q).floor()},this.setDrawingBufferSize=function(S,D,k){W=S,z=D,q=k,t.width=Math.floor(S*k),t.height=Math.floor(D*k),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(fe)},this.setViewport=function(S,D,k,B){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,D,k,B),ne.viewport(y.copy(fe).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,D,k,B){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,D,k,B),ne.scissor(R.copy(ie).multiplyScalar(q).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(S){ne.setScissorTest(Ce=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(S=!0,D=!0,k=!0){let B=0;if(S){let I=!1;if(T!==null){const ue=T.texture.format;I=ue===wu||ue===Au||ue===Tu}if(I){const ue=T.texture.type,Ee=ue===Jn||ue===$i||ue===Pa||ue===ji||ue===bu||ue===Eu,we=le.getClearColor(),Le=le.getClearAlpha(),Oe=we.r,ke=we.g,Fe=we.b;Ee?(d[0]=Oe,d[1]=ke,d[2]=Fe,d[3]=Le,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Oe,g[1]=ke,g[2]=Fe,g[3]=Le,L.clearBufferiv(L.COLOR,0,g))}else B|=L.COLOR_BUFFER_BIT}D&&(B|=L.DEPTH_BUFFER_BIT),k&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Ue.dispose(),me.dispose(),Me.dispose(),He.dispose(),A.dispose(),Q.dispose(),Ye.dispose(),$e.dispose(),j.dispose(),U.dispose(),U.removeEventListener("sessionstart",on),U.removeEventListener("sessionend",ln),ei.stop()};function be(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=re.autoReset,D=We.enabled,k=We.autoUpdate,B=We.needsUpdate,I=We.type;ft(),re.autoReset=S,We.enabled=D,We.autoUpdate=k,We.needsUpdate=B,We.type=I}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){const D=S.target;D.removeEventListener("dispose",he),Ge(D)}function Ge(S){je(S),Me.remove(S)}function je(S){const D=Me.get(S).programs;D!==void 0&&(D.forEach(function(k){j.releaseProgram(k)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,k,B,I,ue){D===null&&(D=Ie);const Ee=I.isMesh&&I.matrixWorld.determinant()<0,we=ef(S,D,k,B,I);ne.setMaterial(B,Ee);let Le=k.index,Oe=1;if(B.wireframe===!0){if(Le=G.getWireframeAttribute(k),Le===void 0)return;Oe=2}const ke=k.drawRange,Fe=k.attributes.position;let Qe=ke.start*Oe,ct=(ke.start+ke.count)*Oe;ue!==null&&(Qe=Math.max(Qe,ue.start*Oe),ct=Math.min(ct,(ue.start+ue.count)*Oe)),Le!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Le.count)):Fe!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Fe.count));const ut=ct-Qe;if(ut<0||ut===1/0)return;Ye.setup(I,B,we,k,Le);let Ft,et=Ze;if(Le!==null&&(Ft=_.get(Le),et=Be,et.setIndex(Ft)),I.isMesh)B.wireframe===!0?(ne.setLineWidth(B.wireframeLinewidth*ze()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(I.isLine){let De=B.linewidth;De===void 0&&(De=1),ne.setLineWidth(De*ze()),I.isLineSegments?et.setMode(L.LINES):I.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else I.isPoints?et.setMode(L.POINTS):I.isSprite&&et.setMode(L.TRIANGLES);if(I.isBatchedMesh)I._multiDrawInstances!==null?et.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances):et.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)et.renderInstances(Qe,ut,I.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ct=Math.min(k.instanceCount,De);et.renderInstances(Qe,ut,Ct)}else et.render(Qe,ut)};function dt(S,D,k){S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,Hr(S,D,k),S.side=Kn,S.needsUpdate=!0,Hr(S,D,k),S.side=Tn):Hr(S,D,k)}this.compile=function(S,D,k=null){k===null&&(k=S),m=me.get(k),m.init(D),b.push(m),k.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),S!==k&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const B=new Set;return S.traverse(function(I){const ue=I.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const we=ue[Ee];dt(we,k,I),B.add(we)}else dt(ue,k,I),B.add(ue)}),b.pop(),m=null,B},this.compileAsync=function(S,D,k=null){const B=this.compile(S,D,k);return new Promise(I=>{function ue(){if(B.forEach(function(Ee){Me.get(Ee).currentProgram.isReady()&&B.delete(Ee)}),B.size===0){I(S);return}setTimeout(ue,10)}ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let xt=null;function nt(S){xt&&xt(S)}function on(){ei.stop()}function ln(){ei.start()}const ei=new Gu;ei.setAnimationLoop(nt),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(S){xt=S,U.setAnimationLoop(S),S===null?ei.stop():ei.start()},U.addEventListener("sessionstart",on),U.addEventListener("sessionend",ln),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(D),D=U.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,T),m=me.get(S,b.length),m.init(D),b.push(m),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Je.setFromProjectionMatrix(Se),ae=this.localClippingEnabled,Y=ve.init(this.clippingPlanes,ae),v=Ue.get(S,p.length),v.init(),p.push(v),U.enabled===!0&&U.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&es(ue,D,-1/0,x.sortObjects)}es(S,D,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(H,se),Ve=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Ve&&le.addToRenderList(v,S),this.info.render.frame++,Y===!0&&ve.beginShadows();const k=m.state.shadowsArray;We.render(k,S,D),Y===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,I=v.transmissive;if(m.setupLights(),D.isArrayCamera){const ue=D.cameras;if(I.length>0)for(let Ee=0,we=ue.length;Ee<we;Ee++){const Le=ue[Ee];Ko(B,I,S,Le)}Ve&&le.render(S);for(let Ee=0,we=ue.length;Ee<we;Ee++){const Le=ue[Ee];Zo(v,S,Le,Le.viewport)}}else I.length>0&&Ko(B,I,S,D),Ve&&le.render(S),Zo(v,S,D);T!==null&&(xe.updateMultisampleRenderTarget(T),xe.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(x,S,D),Ye.resetDefaultState(),C=-1,E=null,b.pop(),b.length>0?(m=b[b.length-1],Y===!0&&ve.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function es(S,D,k,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Je.intersectsSprite(S)){B&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const Ee=Q.update(S),we=S.material;we.visible&&v.push(S,Ee,we,k,ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Je.intersectsObject(S))){const Ee=Q.update(S),we=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ce.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ce.copy(Ee.boundingSphere.center)),ce.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){const Le=Ee.groups;for(let Oe=0,ke=Le.length;Oe<ke;Oe++){const Fe=Le[Oe],Qe=we[Fe.materialIndex];Qe&&Qe.visible&&v.push(S,Ee,Qe,k,ce.z,Fe)}}else we.visible&&v.push(S,Ee,we,k,ce.z,null)}}const ue=S.children;for(let Ee=0,we=ue.length;Ee<we;Ee++)es(ue[Ee],D,k,B)}function Zo(S,D,k,B){const I=S.opaque,ue=S.transmissive,Ee=S.transparent;m.setupLightsView(k),Y===!0&&ve.setGlobalState(x.clippingPlanes,k),B&&ne.viewport(y.copy(B)),I.length>0&&zr(I,D,k),ue.length>0&&zr(ue,D,k),Ee.length>0&&zr(Ee,D,k),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Ko(S,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new xi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?qa:Jn,minFilter:vi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[B.id],Ee=B.viewport||y;ue.setSize(Ee.z,Ee.w);const we=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(N),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),Ve?le.render(k):x.clear();const Le=x.toneMapping;x.toneMapping=Yn;const Oe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),Y===!0&&ve.setGlobalState(x.clippingPlanes,B),zr(S,k,B),xe.updateMultisampleRenderTarget(ue),xe.updateRenderTargetMipmap(ue),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Fe=0,Qe=D.length;Fe<Qe;Fe++){const ct=D[Fe],ut=ct.object,Ft=ct.geometry,et=ct.material,De=ct.group;if(et.side===Tn&&ut.layers.test(B.layers)){const Ct=et.side;et.side=Dt,et.needsUpdate=!0,Jo(ut,k,B,Ft,et,De),et.side=Ct,et.needsUpdate=!0,ke=!0}}ke===!0&&(xe.updateMultisampleRenderTarget(ue),xe.updateRenderTargetMipmap(ue))}x.setRenderTarget(we),x.setClearColor(N,V),Oe!==void 0&&(B.viewport=Oe),x.toneMapping=Le}function zr(S,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ue=S.length;I<ue;I++){const Ee=S[I],we=Ee.object,Le=Ee.geometry,Oe=B===null?Ee.material:B,ke=Ee.group;we.layers.test(k.layers)&&Jo(we,D,k,Le,Oe,ke)}}function Jo(S,D,k,B,I,ue){S.onBeforeRender(x,D,k,B,I,ue),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(x,D,k,B,S,ue),I.transparent===!0&&I.side===Tn&&I.forceSinglePass===!1?(I.side=Dt,I.needsUpdate=!0,x.renderBufferDirect(k,D,B,I,S,ue),I.side=Kn,I.needsUpdate=!0,x.renderBufferDirect(k,D,B,I,S,ue),I.side=Tn):x.renderBufferDirect(k,D,B,I,S,ue),S.onAfterRender(x,D,k,B,I,ue)}function Hr(S,D,k){D.isScene!==!0&&(D=Ie);const B=Me.get(S),I=m.state.lights,ue=m.state.shadowsArray,Ee=I.state.version,we=j.getParameters(S,I.state,ue,D,k),Le=j.getProgramCacheKey(we);let Oe=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?A:He).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",he),Oe=new Map,B.programs=Oe);let ke=Oe.get(Le);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===Ee)return jo(S,we),ke}else we.uniforms=j.getUniforms(S),S.onBuild(k,we,x),S.onBeforeCompile(we,x),ke=j.acquireProgram(we,Le),Oe.set(Le,ke),B.uniforms=we.uniforms;const Fe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),jo(S,we),B.needsLights=nf(S),B.lightsStateVersion=Ee,B.needsLights&&(Fe.ambientLightColor.value=I.state.ambient,Fe.lightProbe.value=I.state.probe,Fe.directionalLights.value=I.state.directional,Fe.directionalLightShadows.value=I.state.directionalShadow,Fe.spotLights.value=I.state.spot,Fe.spotLightShadows.value=I.state.spotShadow,Fe.rectAreaLights.value=I.state.rectArea,Fe.ltc_1.value=I.state.rectAreaLTC1,Fe.ltc_2.value=I.state.rectAreaLTC2,Fe.pointLights.value=I.state.point,Fe.pointLightShadows.value=I.state.pointShadow,Fe.hemisphereLights.value=I.state.hemi,Fe.directionalShadowMap.value=I.state.directionalShadowMap,Fe.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Fe.spotShadowMap.value=I.state.spotShadowMap,Fe.spotLightMatrix.value=I.state.spotLightMatrix,Fe.spotLightMap.value=I.state.spotLightMap,Fe.pointShadowMap.value=I.state.pointShadowMap,Fe.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=ke,B.uniformsList=null,ke}function $o(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Ta.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function jo(S,D){const k=Me.get(S);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function ef(S,D,k,B,I){D.isScene!==!0&&(D=Ie),xe.resetTextureUnits();const ue=D.fog,Ee=B.isMeshStandardMaterial?D.environment:null,we=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qn,Le=(B.isMeshStandardMaterial?A:He).get(B.envMap||Ee),Oe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let ut=Yn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=Ft!==void 0?Ft.length:0,De=Me.get(B),Ct=m.state.lights;if(Y===!0&&(ae===!0||S!==E)){const zt=S===E&&B.id===C;ve.setState(B,S,zt)}let it=!1;B.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ct.state.version||De.outputColorSpace!==we||I.isBatchedMesh&&De.batching===!1||!I.isBatchedMesh&&De.batching===!0||I.isBatchedMesh&&De.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&De.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&De.instancing===!1||!I.isInstancedMesh&&De.instancing===!0||I.isSkinnedMesh&&De.skinning===!1||!I.isSkinnedMesh&&De.skinning===!0||I.isInstancedMesh&&De.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&De.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&De.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&De.instancingMorph===!1&&I.morphTexture!==null||De.envMap!==Le||B.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ve.numPlanes||De.numIntersection!==ve.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==ke||De.morphTargets!==Fe||De.morphNormals!==Qe||De.morphColors!==ct||De.toneMapping!==ut||De.morphTargetsCount!==et)&&(it=!0):(it=!0,De.__version=B.version);let vn=De.currentProgram;it===!0&&(vn=Hr(B,D,I));let Vr=!1,ti=!1,ts=!1;const _t=vn.getUniforms(),Ln=De.uniforms;if(ne.useProgram(vn.program)&&(Vr=!0,ti=!0,ts=!0),B.id!==C&&(C=B.id,ti=!0),Vr||E!==S){_t.setValue(L,"projectionMatrix",S.projectionMatrix),_t.setValue(L,"viewMatrix",S.matrixWorldInverse);const zt=_t.map.cameraPosition;zt!==void 0&&zt.setValue(L,ce.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,ti=!0,ts=!0)}if(I.isSkinnedMesh){_t.setOptional(L,I,"bindMatrix"),_t.setOptional(L,I,"bindMatrixInverse");const zt=I.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),_t.setValue(L,"boneTexture",zt.boneTexture,xe))}I.isBatchedMesh&&(_t.setOptional(L,I,"batchingTexture"),_t.setValue(L,"batchingTexture",I._matricesTexture,xe),_t.setOptional(L,I,"batchingColorTexture"),I._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",I._colorsTexture,xe));const ns=k.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Re.update(I,k,vn),(ti||De.receiveShadow!==I.receiveShadow)&&(De.receiveShadow=I.receiveShadow,_t.setValue(L,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ln.envMap.value=Le,Ln.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ln.envMapIntensity.value=D.environmentIntensity),ti&&(_t.setValue(L,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&tf(Ln,ts),ue&&B.fog===!0&&te.refreshFogUniforms(Ln,ue),te.refreshMaterialUniforms(Ln,B,q,z,m.state.transmissionRenderTarget[S.id]),Ta.upload(L,$o(De),Ln,xe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ta.upload(L,$o(De),Ln,xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(L,"center",I.center),_t.setValue(L,"modelViewMatrix",I.modelViewMatrix),_t.setValue(L,"normalMatrix",I.normalMatrix),_t.setValue(L,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let is=0,rf=zt.length;is<rf;is++){const Qo=zt[is];$e.update(Qo,vn),$e.bind(Qo,vn)}}return vn}function tf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function nf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,D,k){Me.get(S.texture).__webglTexture=D,Me.get(S.depthTexture).__webglTexture=k;const B=Me.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const k=Me.get(S);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,k=0){T=S,P=D,w=k;let B=!0,I=null,ue=!1,Ee=!1;if(S){const Le=Me.get(S);Le.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(L.FRAMEBUFFER,null),B=!1):Le.__webglFramebuffer===void 0?xe.setupRenderTarget(S):Le.__hasExternalTextures&&xe.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const ke=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?I=ke[D][k]:I=ke[D],ue=!0):S.samples>0&&xe.useMultisampledRTT(S)===!1?I=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?I=ke[k]:I=ke,y.copy(S.viewport),R.copy(S.scissor),X=S.scissorTest}else y.copy(fe).multiplyScalar(q).floor(),R.copy(ie).multiplyScalar(q).floor(),X=Ce;if(ne.bindFramebuffer(L.FRAMEBUFFER,I)&&B&&ne.drawBuffers(S,I),ne.viewport(y),ne.scissor(R),ne.setScissorTest(X),ue){const Le=Me.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Le.__webglTexture,k)}else if(Ee){const Le=Me.get(S.texture),Oe=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Oe)}C=-1},this.readRenderTargetPixels=function(S,D,k,B,I,ue,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){ne.bindFramebuffer(L.FRAMEBUFFER,we);try{const Le=S.texture,Oe=Le.format,ke=Le.type;if(!oe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&k>=0&&k<=S.height-I&&L.readPixels(D,k,B,I,_e.convert(Oe),_e.convert(ke),ue)}finally{const Le=T!==null?Me.get(T).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,D,k,B,I,ue,Ee){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){ne.bindFramebuffer(L.FRAMEBUFFER,we);try{const Le=S.texture,Oe=Le.format,ke=Le.type;if(!oe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-B&&k>=0&&k<=S.height-I){const Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(D,k,B,I,_e.convert(Oe),_e.convert(ke),0),L.flush();const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await fd(L,Qe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Fe),L.deleteSync(Qe)}return ue}}finally{const Le=T!==null?Me.get(T).__webglFramebuffer:null;ne.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(S,D=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-k),I=Math.floor(S.image.width*B),ue=Math.floor(S.image.height*B),Ee=D!==null?D.x:0,we=D!==null?D.y:0;xe.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,Ee,we,I,ue),ne.unbindTexture()},this.copyTextureToTexture=function(S,D,k=null,B=null,I=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],D=arguments[2],I=arguments[3]||0,k=null);let ue,Ee,we,Le,Oe,ke;k!==null?(ue=k.max.x-k.min.x,Ee=k.max.y-k.min.y,we=k.min.x,Le=k.min.y):(ue=S.image.width,Ee=S.image.height,we=0,Le=0),B!==null?(Oe=B.x,ke=B.y):(Oe=0,ke=0);const Fe=_e.convert(D.format),Qe=_e.convert(D.type);xe.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const ct=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ft=L.getParameter(L.UNPACK_SKIP_PIXELS),et=L.getParameter(L.UNPACK_SKIP_ROWS),De=L.getParameter(L.UNPACK_SKIP_IMAGES),Ct=S.isCompressedTexture?S.mipmaps[I]:S.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,Oe,ke,ue,Ee,Fe,Qe,Ct.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,Oe,ke,Ct.width,Ct.height,Fe,Ct.data):L.texSubImage2D(L.TEXTURE_2D,I,Oe,ke,Fe,Qe,Ct),L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De),I===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(S,D,k=null,B=null,I=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,S=arguments[2],D=arguments[3],I=arguments[4]||0);let ue,Ee,we,Le,Oe,ke,Fe,Qe,ct;const ut=S.isCompressedTexture?S.mipmaps[I]:S.image;k!==null?(ue=k.max.x-k.min.x,Ee=k.max.y-k.min.y,we=k.max.z-k.min.z,Le=k.min.x,Oe=k.min.y,ke=k.min.z):(ue=ut.width,Ee=ut.height,we=ut.depth,Le=0,Oe=0,ke=0),B!==null?(Fe=B.x,Qe=B.y,ct=B.z):(Fe=0,Qe=0,ct=0);const Ft=_e.convert(D.format),et=_e.convert(D.type);let De;if(D.isData3DTexture)xe.setTexture3D(D,0),De=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)xe.setTexture2DArray(D,0),De=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vn=L.getParameter(L.UNPACK_SKIP_PIXELS),Vr=L.getParameter(L.UNPACK_SKIP_ROWS),ti=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),S.isDataTexture||S.isData3DTexture?L.texSubImage3D(De,I,Fe,Qe,ct,ue,Ee,we,Ft,et,ut.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(De,I,Fe,Qe,ct,ue,Ee,we,Ft,ut.data):L.texSubImage3D(De,I,Fe,Qe,ct,ue,Ee,we,Ft,et,ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ti),I===0&&D.generateMipmaps&&L.generateMipmap(De),ne.unbindTexture()},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&xe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?xe.setTextureCube(S,0):S.isData3DTexture?xe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?xe.setTexture2DArray(S,0):xe.setTexture2D(S,0),ne.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,ne.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ro?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ya?"display-p3":"srgb"}}class y0 extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zu extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new F,Na=new F,yc=new st,dr=new Lo,da=new Za,Ns=new F,Sc=new F;class Mc extends Et{constructor(e=new Nt,t=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Oa.fromBufferAttribute(t,r-1),Na.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Oa.distanceTo(Na);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),da.radius+=a,e.ray.intersectsSphere(da)===!1)return;yc.copy(r).invert(),dr.copy(e.ray).applyMatrix4(yc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),b=u.getX(v+1),x=pa(this,e,dr,l,p,b);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=pa(this,e,dr,l,v,m);p&&t.push(p)}}else{const d=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let v=d,m=g-1;v<m;v+=c){const p=pa(this,e,dr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=pa(this,e,dr,l,g-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function pa(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(Oa.fromBufferAttribute(s,r),Na.fromBufferAttribute(s,a),t.distanceSqToSegment(Oa,Na,Ns,Sc)>i)return;Ns.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ns);if(!(l<e.near||l>e.far))return{distance:l,point:Sc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const u=i[r],h=i[r+1]-u,d=(s-u)/h;return(r+d)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new de:new F);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],a=[],s=[],o=new F,l=new st;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new F)}a[0]=new F,s[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(wt(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}s[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(wt(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fo extends gn{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S0 extends Fo{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Io(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,f){let h=(s-a)/c-(o-a)/(c+u)+(o-s)/u,d=(o-s)/u-(l-s)/(u+f)+(l-o)/f;h*=u,d*=u,r(s,o,h,d)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const ma=new F,ks=new Io,Bs=new Io,Gs=new Io;class M0 extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(ma.subVectors(r[0],r[1]).add(r[0]),c=ma);const f=r[o%a],h=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(ma.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ks.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,m),Bs.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,m),Gs.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ks.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Bs.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Gs.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ks.calc(l),Bs.calc(l),Gs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bc(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function b0(n,e){const t=1-n;return t*t*e}function E0(n,e){return 2*(1-n)*n*e}function T0(n,e){return n*n*e}function _r(n,e,t,i){return b0(n,e)+E0(n,t)+T0(n,i)}function A0(n,e){const t=1-n;return t*t*t*e}function w0(n,e){const t=1-n;return 3*t*t*n*e}function C0(n,e){return 3*(1-n)*n*n*e}function R0(n,e){return n*n*n*e}function yr(n,e,t,i,r){return A0(n,e)+w0(n,t)+C0(n,i)+R0(n,r)}class Ku extends gn{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(yr(e,r.x,a.x,s.x,o.x),yr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L0 extends gn{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(yr(e,r.x,a.x,s.x,o.x),yr(e,r.y,a.y,s.y,o.y),yr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ju extends gn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P0 extends gn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends gn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(_r(e,r.x,a.x,s.x),_r(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends gn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(_r(e,r.x,a.x,s.x),_r(e,r.y,a.y,s.y),_r(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ju extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(bc(o,l.x,c.x,u.x,f.x),bc(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:S0,CatmullRomCurve3:M0,CubicBezierCurve:Ku,CubicBezierCurve3:L0,EllipseCurve:Fo,LineCurve:Ju,LineCurve3:P0,QuadraticBezierCurve:$u,QuadraticBezierCurve3:U0,SplineCurve:ju});class D0 extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new uo[r.type]().fromJSON(r))}return this}}let ho=class extends D0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ju(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new $u(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new Ku(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ju(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const c=new Fo(e,t,i,r,a,s,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class Aa extends ho{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ho().fromJSON(r))}return this}}const F0={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Qu(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,u,f,h,d;if(i&&(a=B0(n,e,a,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Tr(a,s,t,o,l,d,0),s}};function Qu(n,e,t,i,r){let a,s;if(r===J0(n,e,t,i)>0)for(a=e;a<t;a+=i)s=Ec(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=Ec(a,n[a],n[a+1],s);return s&&$a(s,s.next)&&(wr(s),s=s.next),s}function _i(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($a(t,t.next)||lt(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Tr(n,e,t,i,r,a,s){if(!n)return;!s&&a&&W0(n,i,r,a);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,a?O0(n,i,r,a):I0(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=N0(_i(n),e,t),Tr(n,e,t,i,r,a,2)):s===2&&k0(n,e,t,i,r,a):Tr(_i(n),e,t,i,r,a,1);break}}}function I0(n){const e=n.prev,t=n,i=n.next;if(lt(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,u=r<a?r<s?r:s:a<s?a:s,f=o<l?o<c?o:c:l<c?l:c,h=r>a?r>s?r:s:a>s?a:s,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Vi(r,o,a,l,s,c,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O0(n,e,t,i){const r=n.prev,a=n,s=n.next;if(lt(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,u=r.y,f=a.y,h=s.y,d=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=o>l?o>c?o:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=fo(d,g,e,t,i),b=fo(v,m,e,t,i);let x=n.prevZ,M=n.nextZ;for(;x&&x.z>=p&&M&&M.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==s&&Vi(o,u,l,f,c,h,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==s&&Vi(o,u,l,f,c,h,M.x,M.y)&&lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==s&&Vi(o,u,l,f,c,h,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==s&&Vi(o,u,l,f,c,h,M.x,M.y)&&lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function N0(n,e,t){let i=n;do{const r=i.prev,a=i.next.next;!$a(r,a)&&eh(r,i,i.next,a)&&Ar(r,a)&&Ar(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),wr(i),wr(i.next),i=n=a),i=i.next}while(i!==n);return _i(i)}function k0(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Y0(s,o)){let l=th(s,o);s=_i(s,s.next),l=_i(l,l.next),Tr(s,e,t,i,r,a,0),Tr(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function B0(n,e,t,i){const r=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=Qu(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(q0(c));for(r.sort(G0),a=0;a<r.length;a++)t=z0(r[a],t);return t}function G0(n,e){return n.x-e.x}function z0(n,e){const t=H0(n,e);if(!t)return e;const i=th(t,n);return _i(i,i.next),_i(t,t.next)}function H0(n,e){let t=e,i=-1/0,r;const a=n.x,s=n.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=a&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===a))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,f;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&Vi(s<c?a:i,s,l,c,s<c?i:a,s,t.x,t.y)&&(f=Math.abs(s-t.y)/(a-t.x),Ar(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&V0(r,t)))&&(r=t,u=f)),t=t.next;while(t!==o);return r}function V0(n,e){return lt(n.prev,n,e.prev)<0&&lt(e.next,n,n.next)<0}function W0(n,e,t,i){let r=n;do r.z===0&&(r.z=fo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,X0(r)}function X0(n){let e,t,i,r,a,s,o,l,c=1;do{for(t=n,n=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;t=i}a.nextZ=null,c*=2}while(s>1);return n}function fo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function q0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vi(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function Y0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Z0(n,e)&&(Ar(n,e)&&Ar(e,n)&&K0(n,e)&&(lt(n.prev,n,e.prev)||lt(n,e.prev,e))||$a(n,e)&&lt(n.prev,n,n.next)>0&&lt(e.prev,e,e.next)>0)}function lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $a(n,e){return n.x===e.x&&n.y===e.y}function eh(n,e,t,i){const r=va(lt(n,e,t)),a=va(lt(n,e,i)),s=va(lt(t,i,n)),o=va(lt(t,i,e));return!!(r!==a&&s!==o||r===0&&ga(n,t,e)||a===0&&ga(n,i,e)||s===0&&ga(t,n,i)||o===0&&ga(t,e,i))}function ga(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function va(n){return n>0?1:n<0?-1:0}function Z0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&eh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ar(n,e){return lt(n.prev,n,n.next)<0?lt(n,e,n.next)>=0&&lt(n,n.prev,e)>=0:lt(n,e,n.prev)<0||lt(n,n.next,e)<0}function K0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function th(n,e){const t=new po(n.i,n.x,n.y),i=new po(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Ec(n,e,t,i){const r=new po(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function po(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J0(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class Yi{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Tc(e),Ac(i,e);let s=e.length;t.forEach(Tc);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Ac(i,t[l]);const o=F0.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Tc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ac(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Oo extends Nt{constructor(e=new Aa([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(a,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:$0;let x,M=!1,P,w,T,C;p&&(x=p.getSpacedPoints(u),M=!0,h=!1,P=p.computeFrenetFrames(u,!1),w=new F,T=new F,C=new F),h||(m=0,d=0,g=0,v=0);const E=o.extractPoints(c);let y=E.shape;const R=E.holes;if(!Yi.isClockWise(y)){y=y.reverse();for(let J=0,ee=R.length;J<ee;J++){const oe=R[J];Yi.isClockWise(oe)&&(R[J]=oe.reverse())}}const N=Yi.triangulateShape(y,R),V=y;for(let J=0,ee=R.length;J<ee;J++){const oe=R[J];y=y.concat(oe)}function W(J,ee,oe){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ee,oe)}const z=y.length,q=N.length;function H(J,ee,oe){let ne,re,Me;const xe=J.x-ee.x,He=J.y-ee.y,A=oe.x-J.x,_=oe.y-J.y,G=xe*xe+He*He,Q=xe*_-He*A;if(Math.abs(Q)>Number.EPSILON){const j=Math.sqrt(G),te=Math.sqrt(A*A+_*_),Ue=ee.x-He/j,me=ee.y+xe/j,ve=oe.x-_/te,We=oe.y+A/te,le=((ve-Ue)*_-(We-me)*A)/(xe*_-He*A);ne=Ue+xe*le-J.x,re=me+He*le-J.y;const Re=ne*ne+re*re;if(Re<=2)return new de(ne,re);Me=Math.sqrt(Re/2)}else{let j=!1;xe>Number.EPSILON?A>Number.EPSILON&&(j=!0):xe<-Number.EPSILON?A<-Number.EPSILON&&(j=!0):Math.sign(He)===Math.sign(_)&&(j=!0),j?(ne=-He,re=xe,Me=Math.sqrt(G)):(ne=xe,re=He,Me=Math.sqrt(G/2))}return new de(ne/Me,re/Me)}const se=[];for(let J=0,ee=V.length,oe=ee-1,ne=J+1;J<ee;J++,oe++,ne++)oe===ee&&(oe=0),ne===ee&&(ne=0),se[J]=H(V[J],V[oe],V[ne]);const fe=[];let ie,Ce=se.concat();for(let J=0,ee=R.length;J<ee;J++){const oe=R[J];ie=[];for(let ne=0,re=oe.length,Me=re-1,xe=ne+1;ne<re;ne++,Me++,xe++)Me===re&&(Me=0),xe===re&&(xe=0),ie[ne]=H(oe[ne],oe[Me],oe[xe]);fe.push(ie),Ce=Ce.concat(ie)}for(let J=0;J<m;J++){const ee=J/m,oe=d*Math.cos(ee*Math.PI/2),ne=g*Math.sin(ee*Math.PI/2)+v;for(let re=0,Me=V.length;re<Me;re++){const xe=W(V[re],se[re],ne);ce(xe.x,xe.y,-oe)}for(let re=0,Me=R.length;re<Me;re++){const xe=R[re];ie=fe[re];for(let He=0,A=xe.length;He<A;He++){const _=W(xe[He],ie[He],ne);ce(_.x,_.y,-oe)}}}const Je=g+v;for(let J=0;J<z;J++){const ee=h?W(y[J],Ce[J],Je):y[J];M?(T.copy(P.normals[0]).multiplyScalar(ee.x),w.copy(P.binormals[0]).multiplyScalar(ee.y),C.copy(x[0]).add(T).add(w),ce(C.x,C.y,C.z)):ce(ee.x,ee.y,0)}for(let J=1;J<=u;J++)for(let ee=0;ee<z;ee++){const oe=h?W(y[ee],Ce[ee],Je):y[ee];M?(T.copy(P.normals[J]).multiplyScalar(oe.x),w.copy(P.binormals[J]).multiplyScalar(oe.y),C.copy(x[J]).add(T).add(w),ce(C.x,C.y,C.z)):ce(oe.x,oe.y,f/u*J)}for(let J=m-1;J>=0;J--){const ee=J/m,oe=d*Math.cos(ee*Math.PI/2),ne=g*Math.sin(ee*Math.PI/2)+v;for(let re=0,Me=V.length;re<Me;re++){const xe=W(V[re],se[re],ne);ce(xe.x,xe.y,f+oe)}for(let re=0,Me=R.length;re<Me;re++){const xe=R[re];ie=fe[re];for(let He=0,A=xe.length;He<A;He++){const _=W(xe[He],ie[He],ne);M?ce(_.x,_.y+x[u-1].y,x[u-1].x+oe):ce(_.x,_.y,f+oe)}}}Y(),ae();function Y(){const J=r.length/3;if(h){let ee=0,oe=z*ee;for(let ne=0;ne<q;ne++){const re=N[ne];Ie(re[2]+oe,re[1]+oe,re[0]+oe)}ee=u+m*2,oe=z*ee;for(let ne=0;ne<q;ne++){const re=N[ne];Ie(re[0]+oe,re[1]+oe,re[2]+oe)}}else{for(let ee=0;ee<q;ee++){const oe=N[ee];Ie(oe[2],oe[1],oe[0])}for(let ee=0;ee<q;ee++){const oe=N[ee];Ie(oe[0]+z*u,oe[1]+z*u,oe[2]+z*u)}}i.addGroup(J,r.length/3-J,0)}function ae(){const J=r.length/3;let ee=0;Se(V,ee),ee+=V.length;for(let oe=0,ne=R.length;oe<ne;oe++){const re=R[oe];Se(re,ee),ee+=re.length}i.addGroup(J,r.length/3-J,1)}function Se(J,ee){let oe=J.length;for(;--oe>=0;){const ne=oe;let re=oe-1;re<0&&(re=J.length-1);for(let Me=0,xe=u+m*2;Me<xe;Me++){const He=z*Me,A=z*(Me+1),_=ee+ne+He,G=ee+re+He,Q=ee+re+A,j=ee+ne+A;Ve(_,G,Q,j)}}}function ce(J,ee,oe){l.push(J),l.push(ee),l.push(oe)}function Ie(J,ee,oe){ze(J),ze(ee),ze(oe);const ne=r.length/3,re=b.generateTopUV(i,r,ne-3,ne-2,ne-1);L(re[0]),L(re[1]),L(re[2])}function Ve(J,ee,oe,ne){ze(J),ze(ee),ze(ne),ze(ee),ze(oe),ze(ne);const re=r.length/3,Me=b.generateSideWallUV(i,r,re-6,re-3,re-2,re-1);L(Me[0]),L(Me[1]),L(Me[3]),L(Me[1]),L(Me[2]),L(Me[3])}function ze(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function L(J){a.push(J.x),a.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return j0(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new uo[r.type]().fromJSON(r)),new Oo(i,e.options)}}const $0={generateTopUV:function(n,e,t,i,r){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(a,s),new de(o,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,r,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new de(s,1-l),new de(c,1-f),new de(h,1-g),new de(v,1-p)]:[new de(o,1-l),new de(u,1-f),new de(d,1-g),new de(m,1-p)]}};function j0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class di extends Nt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],f=new F,h=new F,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const b=[],x=p/i;let M=0;p===0&&s===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const w=P/t;f.x=-e*Math.cos(r+w*a)*Math.sin(s+x*o),f.y=e*Math.cos(s+x*o),f.z=e*Math.sin(r+w*a)*Math.sin(s+x*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(w+M,1-x),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const x=u[p][b+1],M=u[p][b],P=u[p+1][b],w=u[p+1][b+1];(p!==0||s>0)&&d.push(x,M,w),(p!==i-1||l<Math.PI)&&d.push(M,P,w)}this.setIndex(d),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Q0 extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends Si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ka={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ex{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const tx=new ex;class Fr{constructor(e){this.manager=e!==void 0?e:tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bn={};class nx extends Error{constructor(e,t){super(e),this.response=t}}class ix extends Fr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ka.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:i,onError:r});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:x,value:M})=>{if(x)p.close();else{v+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,T=u.length;w<T;w++){const C=u[w];C.onProgress&&C.onProgress(P)}p.enqueue(M),b()}},x=>{p.error(x)})}}});return new Response(m)}else throw new nx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ka.add(e,c);const u=bn[e];delete bn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete bn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rx extends Fr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=ka.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Er("img");function l(){u(),ka.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class ax extends Fr{constructor(e){super(e)}load(e,t,i,r){const a=new Lt,s=new rx(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class sx extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zs=new st,wc=new F,Cc=new F;class ox{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cc),t.updateMatrixWorld(),zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lx extends ox{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cx extends sx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rc=new st;class ux{constructor(e,t,i=0,r=1/0){this.ray=new Lo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(e,t=!0,i=[]){return mo(e,this,i,t),i.sort(Lc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)mo(e[r],this,i,t);return i.sort(Lc),i}}function Lc(n,e){return n.distance-e.distance}function mo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)mo(a[s],e,t,!0)}}const Pc=new F,xa=new F,Uc=new F;class hx extends Et{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Nt;r.setAttribute("position",new Pt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new Zu({fog:!1,toneMapped:!1});this.lightPlane=new Mc(r,a),this.add(this.lightPlane),r=new Nt,r.setAttribute("position",new Pt([0,0,0,0,0,1],3)),this.targetLine=new Mc(r,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pc.setFromMatrixPosition(this.light.matrixWorld),xa.setFromMatrixPosition(this.light.target.matrixWorld),Uc.subVectors(xa,Pc),this.lightPlane.lookAt(xa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(xa),this.targetLine.scale.z=Uc.length()}}class fx{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ho,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let x=0,M=p.length;x<M;x++){const P=p[x],w=new Aa;w.curves=P.curves,b.push(w)}return b}function i(p,b){const x=b.length;let M=!1;for(let P=x-1,w=0;w<x;P=w++){let T=b[P],C=b[w],E=C.x-T.x,y=C.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=b[w],E=-E,C=b[P],y=-y),p.y<T.y||p.y>C.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const R=y*(p.x-T.x)-E*(p.y-T.y);if(R===0)return!0;if(R<0)continue;M=!M}}else{if(p.y!==T.y)continue;if(C.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=C.x)return!0}}return M}const r=Yi.isClockWise,a=this.subPaths;if(a.length===0)return[];let s,o,l;const c=[];if(a.length===1)return o=a[0],l=new Aa,l.curves=o.curves,c.push(l),c;let u=!r(a[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,v;h[g]=void 0,d[g]=[];for(let p=0,b=a.length;p<b;p++)o=a[p],v=o.getPoints(),s=r(v),s=e?!s:s,s?(!u&&h[g]&&g++,h[g]={s:new Aa,p:v},h[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!h[0])return t(a);if(h.length>1){let p=!1,b=0;for(let x=0,M=h.length;x<M;x++)f[x]=[];for(let x=0,M=h.length;x<M;x++){const P=d[x];for(let w=0;w<P.length;w++){const T=P[w];let C=!0;for(let E=0;E<h.length;E++)i(T.p,h[E].p)&&(x!==E&&b++,C?(C=!1,f[E].push(T)):p=!0);C&&f[x].push(T)}}b>0&&p===!1&&(d=f)}let m;for(let p=0,b=h.length;p<b;p++){l=h[p].s,c.push(l),m=d[p];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function nh(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),a={},s={},o=n[0].morphTargetsRelative,l=new Nt;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(const u in a){const f=Dc(a[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in s){const f=s[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let v=0;v<s[u].length;++v)d.push(s[u][v][h]);const g=Dc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Dc(n){let e,t,i,r=-1,a=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}const s=new e(a),o=new Qt(s,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const v=u.getComponent(h,g);o.setComponent(h+f,g,v)}}else s.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}let dx=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=px(e,t,this.data);for(let a=0,s=r.length;a<s;a++)i.push(...r[a].toShapes());return i}};function px(n,e,t){const i=Array.from(n),r=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,s=[];let o=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)o=0,l-=a;else{const f=mx(u,r,o,l,t);o+=f.offsetX,s.push(f.path)}}return s}function mx(n,e,t,i,r){const a=r.glyphs[n]||r.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const s=new fx;let o,l,c,u,f,h,d,g;if(a.o){const v=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":o=v[m++]*e+t,l=v[m++]*e+i,s.moveTo(o,l);break;case"l":o=v[m++]*e+t,l=v[m++]*e+i,s.lineTo(o,l);break;case"q":c=v[m++]*e+t,u=v[m++]*e+i,f=v[m++]*e+t,h=v[m++]*e+i,s.quadraticCurveTo(f,h,c,u);break;case"b":c=v[m++]*e+t,u=v[m++]*e+i,f=v[m++]*e+t,h=v[m++]*e+i,d=v[m++]*e+t,g=v[m++]*e+i,s.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:a.ha*e,path:s}}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var n=function(){try{var t={},i=Object.defineProperty,r=i(t,t,t)&&i}catch{}return r}(),e=function(t){if(this==null)throw TypeError();var i=String(this),r=i.length,a=t?Number(t):0;if(a!=a&&(a=0),!(a<0||a>=r)){var s=i.charCodeAt(a),o;return s>=55296&&s<=56319&&r>a+1&&(o=i.charCodeAt(a+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}};n?n(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var No=0,ih=-3;function Cr(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function gx(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Cr,this.dtree=new Cr}var rh=new Cr,ah=new Cr,ko=new Uint8Array(30),Bo=new Uint16Array(30),sh=new Uint8Array(30),oh=new Uint16Array(30),vx=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fc=new Cr,cn=new Uint8Array(320);function lh(n,e,t,i){var r,a;for(r=0;r<t;++r)n[r]=0;for(r=0;r<30-t;++r)n[r+t]=r/t|0;for(a=i,r=0;r<30;++r)e[r]=a,a+=1<<n[r]}function xx(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var Ic=new Uint16Array(16);function Hs(n,e,t,i){var r,a;for(r=0;r<16;++r)n.table[r]=0;for(r=0;r<i;++r)n.table[e[t+r]]++;for(n.table[0]=0,a=0,r=0;r<16;++r)Ic[r]=a,a+=n.table[r];for(r=0;r<i;++r)e[t+r]&&(n.trans[Ic[e[t+r]]++]=r)}function _x(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function un(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function go(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,r=0,a=n.tag;do i=2*i+(a&1),a>>>=1,++r,t+=e.table[r],i-=e.table[r];while(i>=0);return n.tag=a,n.bitcount-=r,e.trans[t+i]}function yx(n,e,t){var i,r,a,s,o,l;for(i=un(n,5,257),r=un(n,5,1),a=un(n,4,4),s=0;s<19;++s)cn[s]=0;for(s=0;s<a;++s){var c=un(n,3,0);cn[vx[s]]=c}for(Hs(Fc,cn,0,19),o=0;o<i+r;){var u=go(n,Fc);switch(u){case 16:var f=cn[o-1];for(l=un(n,2,3);l;--l)cn[o++]=f;break;case 17:for(l=un(n,3,3);l;--l)cn[o++]=0;break;case 18:for(l=un(n,7,11);l;--l)cn[o++]=0;break;default:cn[o++]=u;break}}Hs(e,cn,0,i),Hs(t,cn,i,r)}function Oc(n,e,t){for(;;){var i=go(n,e);if(i===256)return No;if(i<256)n.dest[n.destLen++]=i;else{var r,a,s,o;for(i-=257,r=un(n,ko[i],Bo[i]),a=go(n,t),s=n.destLen-un(n,sh[a],oh[a]),o=s;o<s+r;++o)n.dest[n.destLen++]=n.dest[o]}}}function Sx(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return ih;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,No}function Mx(n,e){var t=new gx(n,e),i,r,a;do{switch(i=_x(t),r=un(t,2,0),r){case 0:a=Sx(t);break;case 1:a=Oc(t,rh,ah);break;case 2:yx(t,t.ltree,t.dtree),a=Oc(t,t.ltree,t.dtree);break;default:a=ih}if(a!==No)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}xx(rh,ah);lh(ko,Bo,4,3);lh(sh,oh,2,1);ko[28]=0;Bo[28]=258;var bx=Mx;function Bi(n,e,t,i,r){return Math.pow(1-r,3)*n+3*Math.pow(1-r,2)*r*e+3*(1-r)*Math.pow(r,2)*t+Math.pow(r,3)*i}function Rn(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Rn.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Rn.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Rn.prototype.addX=function(n){this.addPoint(n,null)};Rn.prototype.addY=function(n){this.addPoint(null,n)};Rn.prototype.addBezier=function(n,e,t,i,r,a,s,o){var l=[n,e],c=[t,i],u=[r,a],f=[s,o];this.addPoint(n,e),this.addPoint(s,o);for(var h=0;h<=1;h++){var d=6*l[h]-12*c[h]+6*u[h],g=-3*l[h]+9*c[h]-9*u[h]+3*f[h],v=3*c[h]-3*l[h];if(g===0){if(d===0)continue;var m=-v/d;0<m&&m<1&&(h===0&&this.addX(Bi(l[h],c[h],u[h],f[h],m)),h===1&&this.addY(Bi(l[h],c[h],u[h],f[h],m)));continue}var p=Math.pow(d,2)-4*v*g;if(!(p<0)){var b=(-d+Math.sqrt(p))/(2*g);0<b&&b<1&&(h===0&&this.addX(Bi(l[h],c[h],u[h],f[h],b)),h===1&&this.addY(Bi(l[h],c[h],u[h],f[h],b)));var x=(-d-Math.sqrt(p))/(2*g);0<x&&x<1&&(h===0&&this.addX(Bi(l[h],c[h],u[h],f[h],x)),h===1&&this.addY(Bi(l[h],c[h],u[h],f[h],x)))}}};Rn.prototype.addQuad=function(n,e,t,i,r,a){var s=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=s+1/3*(r-n),c=o+1/3*(a-e);this.addBezier(n,e,s,o,l,c,r,a)};function mt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}mt.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};mt.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};mt.prototype.curveTo=mt.prototype.bezierCurveTo=function(n,e,t,i,r,a){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:r,y:a})};mt.prototype.quadTo=mt.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};mt.prototype.close=mt.prototype.closePath=function(){this.commands.push({type:"Z"})};mt.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof Rn){var e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};mt.prototype.getBoundingBox=function(){for(var n=new Rn,e=0,t=0,i=0,r=0,a=0;a<this.commands.length;a++){var s=this.commands[a];switch(s.type){case"M":n.addPoint(s.x,s.y),e=i=s.x,t=r=s.y;break;case"L":n.addPoint(s.x,s.y),i=s.x,r=s.y;break;case"Q":n.addQuad(i,r,s.x1,s.y1,s.x,s.y),i=s.x,r=s.y;break;case"C":n.addBezier(i,r,s.x1,s.y1,s.x2,s.y2,s.x,s.y),i=s.x,r=s.y;break;case"Z":i=e,r=t;break;default:throw new Error("Unexpected path command "+s.type)}}return n.isEmpty()&&n.addPoint(0,0),n};mt.prototype.draw=function(n){n.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?n.moveTo(t.x,t.y):t.type==="L"?n.lineTo(t.x,t.y):t.type==="C"?n.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?n.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};mt.prototype.toPathData=function(n){n=n!==void 0?n:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(n)}function t(){for(var s=arguments,o="",l=0;l<arguments.length;l+=1){var c=s[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var i="",r=0;r<this.commands.length;r+=1){var a=this.commands[r];a.type==="M"?i+="M"+t(a.x,a.y):a.type==="L"?i+="L"+t(a.x,a.y):a.type==="C"?i+="C"+t(a.x1,a.y1,a.x2,a.y2,a.x,a.y):a.type==="Q"?i+="Q"+t(a.x1,a.y1,a.x,a.y):a.type==="Z"&&(i+="Z")}return i};mt.prototype.toSVG=function(n){var e='<path d="';return e+=this.toPathData(n),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};mt.prototype.toDOMElement=function(n){var e=this.toPathData(n),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function ch(n){throw new Error(n)}function Nc(n,e){n||ch(e)}var Pe={fail:ch,argument:Nc,assert:Nc},kc=32768,Bc=2147483648,tr={},pe={},Ne={};function an(n){return function(){return n}}pe.BYTE=function(n){return Pe.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};Ne.BYTE=an(1);pe.CHAR=function(n){return[n.charCodeAt(0)]};Ne.CHAR=an(1);pe.CHARARRAY=function(n){typeof n>"u"&&(n="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};Ne.CHARARRAY=function(n){return typeof n>"u"?0:n.length};pe.USHORT=function(n){return[n>>8&255,n&255]};Ne.USHORT=an(2);pe.SHORT=function(n){return n>=kc&&(n=-(2*kc-n)),[n>>8&255,n&255]};Ne.SHORT=an(2);pe.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};Ne.UINT24=an(3);pe.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};Ne.ULONG=an(4);pe.LONG=function(n){return n>=Bc&&(n=-(2*Bc-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};Ne.LONG=an(4);pe.FIXED=pe.ULONG;Ne.FIXED=Ne.ULONG;pe.FWORD=pe.SHORT;Ne.FWORD=Ne.SHORT;pe.UFWORD=pe.USHORT;Ne.UFWORD=Ne.USHORT;pe.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};Ne.LONGDATETIME=an(8);pe.TAG=function(n){return Pe.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};Ne.TAG=an(4);pe.Card8=pe.BYTE;Ne.Card8=Ne.BYTE;pe.Card16=pe.USHORT;Ne.Card16=Ne.USHORT;pe.OffSize=pe.BYTE;Ne.OffSize=Ne.BYTE;pe.SID=pe.USHORT;Ne.SID=Ne.USHORT;pe.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?pe.NUMBER16(n):pe.NUMBER32(n)};Ne.NUMBER=function(n){return pe.NUMBER(n).length};pe.NUMBER16=function(n){return[28,n>>8&255,n&255]};Ne.NUMBER16=an(3);pe.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};Ne.NUMBER32=an(5);pe.REAL=function(n){var e=n.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var i=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*i)/i).toString()}for(var r="",a=0,s=e.length;a<s;a+=1){var o=e[a];o==="e"?r+=e[++a]==="-"?"c":"b":o==="."?r+="a":o==="-"?r+="e":r+=o}r+=r.length&1?"f":"ff";for(var l=[30],c=0,u=r.length;c<u;c+=2)l.push(parseInt(r.substr(c,2),16));return l};Ne.REAL=function(n){return pe.REAL(n).length};pe.NAME=pe.CHARARRAY;Ne.NAME=Ne.CHARARRAY;pe.STRING=pe.CHARARRAY;Ne.STRING=Ne.CHARARRAY;tr.UTF8=function(n,e,t){for(var i=[],r=t,a=0;a<r;a++,e+=1)i[a]=n.getUint8(e);return String.fromCharCode.apply(null,i)};tr.UTF16=function(n,e,t){for(var i=[],r=t/2,a=0;a<r;a++,e+=2)i[a]=n.getUint16(e);return String.fromCharCode.apply(null,i)};pe.UTF16=function(n){for(var e=[],t=0;t<n.length;t+=1){var i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};Ne.UTF16=function(n){return n.length*2};var vo={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};tr.MACSTRING=function(n,e,t,i){var r=vo[i];if(r!==void 0){for(var a="",s=0;s<t;s++){var o=n.getUint8(e+s);o<=127?a+=String.fromCharCode(o):a+=r[o&127]}return a}};var _a=typeof WeakMap=="function"&&new WeakMap,ya,Ex=function(n){if(!ya){ya={};for(var e in vo)ya[e]=new String(e)}var t=ya[n];if(t!==void 0){if(_a){var i=_a.get(t);if(i!==void 0)return i}var r=vo[n];if(r!==void 0){for(var a={},s=0;s<r.length;s++)a[r.charCodeAt(s)]=s+128;return _a&&_a.set(t,a),a}}};pe.MACSTRING=function(n,e){var t=Ex(e);if(t!==void 0){for(var i=[],r=0;r<n.length;r++){var a=n.charCodeAt(r);if(a>=128&&(a=t[a],a===void 0))return;i[r]=a}return i}};Ne.MACSTRING=function(n,e){var t=pe.MACSTRING(n,e);return t!==void 0?t.length:0};function xo(n){return n>=-128&&n<=127}function Tx(n,e,t){for(var i=0,r=n.length;e<r&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function Ax(n,e,t){for(var i=0,r=n.length,a=e;a<r&&i<64;){var s=n[a];if(!xo(s)||s===0&&a+1<r&&n[a+1]===0)break;++a,++i}t.push(i-1);for(var o=e;o<a;++o)t.push(n[o]+256&255);return a}function wx(n,e,t){for(var i=0,r=n.length,a=e;a<r&&i<64;){var s=n[a];if(s===0||xo(s)&&a+1<r&&xo(n[a+1]))break;++a,++i}t.push(64|i-1);for(var o=e;o<a;++o){var l=n[o];t.push(l+65536>>8&255,l+256&255)}return a}pe.VARDELTAS=function(n){for(var e=0,t=[];e<n.length;){var i=n[e];i===0?e=Tx(n,e,t):i>=-128&&i<=127?e=Ax(n,e,t):e=wx(n,e,t)}return t};pe.INDEX=function(n){for(var e=1,t=[e],i=[],r=0;r<n.length;r+=1){var a=pe.OBJECT(n[r]);Array.prototype.push.apply(i,a),e+=a.length,t.push(e)}if(i.length===0)return[0,0];for(var s=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,pe.BYTE,pe.USHORT,pe.UINT24,pe.ULONG][o],c=0;c<t.length;c+=1){var u=l(t[c]);Array.prototype.push.apply(s,u)}return Array.prototype.concat(pe.Card16(n.length),pe.OffSize(o),s,i)};Ne.INDEX=function(n){return pe.INDEX(n).length};pe.DICT=function(n){for(var e=[],t=Object.keys(n),i=t.length,r=0;r<i;r+=1){var a=parseInt(t[r],0),s=n[a];e=e.concat(pe.OPERAND(s.value,s.type)),e=e.concat(pe.OPERATOR(a))}return e};Ne.DICT=function(n){return pe.DICT(n).length};pe.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};pe.OPERAND=function(n,e){var t=[];if(Array.isArray(e))for(var i=0;i<e.length;i+=1)Pe.argument(n.length===e.length,"Not enough arguments given for type"+e),t=t.concat(pe.OPERAND(n[i],e[i]));else if(e==="SID")t=t.concat(pe.NUMBER(n));else if(e==="offset")t=t.concat(pe.NUMBER32(n));else if(e==="number")t=t.concat(pe.NUMBER(n));else if(e==="real")t=t.concat(pe.REAL(n));else throw new Error("Unknown operand type "+e);return t};pe.OP=pe.BYTE;Ne.OP=Ne.BYTE;var Sa=typeof WeakMap=="function"&&new WeakMap;pe.CHARSTRING=function(n){if(Sa){var e=Sa.get(n);if(e!==void 0)return e}for(var t=[],i=n.length,r=0;r<i;r+=1){var a=n[r];t=t.concat(pe[a.type](a.value))}return Sa&&Sa.set(n,t),t};Ne.CHARSTRING=function(n){return pe.CHARSTRING(n).length};pe.OBJECT=function(n){var e=pe[n.type];return Pe.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};Ne.OBJECT=function(n){var e=Ne[n.type];return Pe.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};pe.TABLE=function(n){for(var e=[],t=n.fields.length,i=[],r=[],a=0;a<t;a+=1){var s=n.fields[a],o=pe[s.type];Pe.argument(o!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var l=n[s.name];l===void 0&&(l=s.value);var c=o(l);s.type==="TABLE"?(r.push(e.length),e=e.concat([0,0]),i.push(c)):e=e.concat(c)}for(var u=0;u<i.length;u+=1){var f=r[u],h=e.length;Pe.argument(h<65536,"Table "+n.tableName+" too big."),e[f]=h>>8,e[f+1]=h&255,e=e.concat(i[u])}return e};Ne.TABLE=function(n){for(var e=0,t=n.fields.length,i=0;i<t;i+=1){var r=n.fields[i],a=Ne[r.type];Pe.argument(a!==void 0,"No sizeOf function for field type "+r.type+" ("+r.name+")");var s=n[r.name];s===void 0&&(s=r.value),e+=a(s),r.type==="TABLE"&&(e+=2)}return e};pe.RECORD=pe.TABLE;Ne.RECORD=Ne.TABLE;pe.LITERAL=function(n){return n};Ne.LITERAL=function(n){return n.length};function bt(n,e,t){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var i=0;i<e.length;i+=1){var r=e[i];this[r.name]=r.value}if(this.tableName=n,this.fields=e,t)for(var a=Object.keys(t),s=0;s<a.length;s+=1){var o=a[s],l=t[o];this[o]!==void 0&&(this[o]=l)}}bt.prototype.encode=function(){return pe.TABLE(this)};bt.prototype.sizeOf=function(){return Ne.TABLE(this)};function Rr(n,e,t){t===void 0&&(t=e.length);var i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(var r=0;r<e.length;r++)i[r+1]={name:n+r,type:"USHORT",value:e[r]};return i}function _o(n,e,t){var i=e.length,r=new Array(i+1);r[0]={name:n+"Count",type:"USHORT",value:i};for(var a=0;a<i;a++)r[a+1]={name:n+a,type:"TABLE",value:t(e[a],a)};return r}function Lr(n,e,t){var i=e.length,r=[];r[0]={name:n+"Count",type:"USHORT",value:i};for(var a=0;a<i;a++)r=r.concat(t(e[a],a));return r}function Ba(n){n.format===1?bt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Rr("glyph",n.glyphs))):n.format===2?bt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Lr("rangeRecord",n.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Pe.assert(!1,"Coverage format must be 1 or 2.")}Ba.prototype=Object.create(bt.prototype);Ba.prototype.constructor=Ba;function Ga(n){bt.call(this,"scriptListTable",Lr("scriptRecord",n,function(e,t){var i=e.script,r=i.defaultLangSys;return Pe.assert(!!r,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new bt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new bt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:r.reqFeatureIndex}].concat(Rr("featureIndex",r.featureIndexes)))}].concat(Lr("langSys",i.langSysRecords,function(a,s){var o=a.langSys;return[{name:"langSysTag"+s,type:"TAG",value:a.tag},{name:"langSys"+s,type:"TABLE",value:new bt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(Rr("featureIndex",o.featureIndexes)))}]})))}]}))}Ga.prototype=Object.create(bt.prototype);Ga.prototype.constructor=Ga;function za(n){bt.call(this,"featureListTable",Lr("featureRecord",n,function(e,t){var i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new bt("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(Rr("lookupListIndex",i.lookupListIndexes)))}]}))}za.prototype=Object.create(bt.prototype);za.prototype.constructor=za;function Ha(n,e){bt.call(this,"lookupListTable",_o("lookup",n,function(t){var i=e[t.lookupType];return Pe.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new bt("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(_o("subtable",t.subtables,i)))}))}Ha.prototype=Object.create(bt.prototype);Ha.prototype.constructor=Ha;var ye={Table:bt,Record:bt,Coverage:Ba,ScriptList:Ga,FeatureList:za,LookupList:Ha,ushortList:Rr,tableList:_o,recordList:Lr};function Gc(n,e){return n.getUint8(e)}function Va(n,e){return n.getUint16(e,!1)}function Cx(n,e){return n.getInt16(e,!1)}function Go(n,e){return n.getUint32(e,!1)}function uh(n,e){var t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function Rx(n,e){for(var t="",i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function Lx(n,e,t){for(var i=0,r=0;r<t;r+=1)i<<=8,i+=n.getUint8(e+r);return i}function Px(n,e,t){for(var i=[],r=e;r<t;r+=1)i.push(n.getUint8(r));return i}function Ux(n){for(var e="",t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var Dx={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function O(n,e){this.data=n,this.offset=e,this.relativeOffset=0}O.prototype.parseByte=function(){var n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};O.prototype.parseChar=function(){var n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};O.prototype.parseCard8=O.prototype.parseByte;O.prototype.parseUShort=function(){var n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};O.prototype.parseCard16=O.prototype.parseUShort;O.prototype.parseSID=O.prototype.parseUShort;O.prototype.parseOffset16=O.prototype.parseUShort;O.prototype.parseShort=function(){var n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};O.prototype.parseF2Dot14=function(){var n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};O.prototype.parseULong=function(){var n=Go(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};O.prototype.parseOffset32=O.prototype.parseULong;O.prototype.parseFixed=function(){var n=uh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};O.prototype.parseString=function(n){var e=this.data,t=this.offset+this.relativeOffset,i="";this.relativeOffset+=n;for(var r=0;r<n;r++)i+=String.fromCharCode(e.getUint8(t+r));return i};O.prototype.parseTag=function(){return this.parseString(4)};O.prototype.parseLongDateTime=function(){var n=Go(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};O.prototype.parseVersion=function(n){var e=Va(this.data,this.offset+this.relativeOffset),t=Va(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};O.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=Dx[n]*e};O.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};O.prototype.parseOffset16List=O.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};O.prototype.parseShortList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};O.prototype.parseByteList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint8(i++);return this.relativeOffset+=n,e};O.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};O.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};O.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var a={},s=0;s<i.length;s++){var o=i[s],l=e[o];a[o]=l.call(this)}t[r]=a}return t};O.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var a={},s=0;s<i.length;s++){var o=i[s],l=e[o];a[o]=l.call(this)}t[r]=a}return t};O.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);for(var e=Object.keys(n),t={},i=0;i<e.length;i++){var r=e[i],a=n[r];t[r]=a.call(this)}return t};O.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n!==0){var e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};O.prototype.parseValueRecordList=function(){for(var n=this.parseUShort(),e=this.parseUShort(),t=new Array(e),i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};O.prototype.parsePointer=function(n){var e=this.parseOffset16();if(e>0)return new O(this.data,this.offset+e).parseStruct(n)};O.prototype.parsePointer32=function(n){var e=this.parseOffset32();if(e>0)return new O(this.data,this.offset+e).parseStruct(n)};O.prototype.parseListOfLists=function(n){for(var e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,r=new Array(t),a=0;a<t;a++){var s=e[a];if(s===0){r[a]=void 0;continue}if(this.relativeOffset=s,n){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=s+o[c],l[c]=n.call(this);r[a]=l}else r[a]=this.parseUShortList()}return this.relativeOffset=i,r};O.prototype.parseCoverage=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var i=new Array(t),r=0;r<t;r++)i[r]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};O.prototype.parseClassDef=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:O.uShort,end:O.uShort,classId:O.uShort})};throw new Error("0x"+n.toString(16)+": ClassDef format must be 1 or 2.")};O.list=function(n,e){return function(){return this.parseList(n,e)}};O.list32=function(n,e){return function(){return this.parseList32(n,e)}};O.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};O.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};O.pointer=function(n){return function(){return this.parsePointer(n)}};O.pointer32=function(n){return function(){return this.parsePointer32(n)}};O.tag=O.prototype.parseTag;O.byte=O.prototype.parseByte;O.uShort=O.offset16=O.prototype.parseUShort;O.uShortList=O.prototype.parseUShortList;O.uLong=O.offset32=O.prototype.parseULong;O.uLongList=O.prototype.parseULongList;O.struct=O.prototype.parseStruct;O.coverage=O.prototype.parseCoverage;O.classDef=O.prototype.parseClassDef;var zc={reserved:O.uShort,reqFeatureIndex:O.uShort,featureIndexes:O.uShortList};O.prototype.parseScriptList=function(){return this.parsePointer(O.recordList({tag:O.tag,script:O.pointer({defaultLangSys:O.pointer(zc),langSysRecords:O.recordList({tag:O.tag,langSys:O.pointer(zc)})})}))||[]};O.prototype.parseFeatureList=function(){return this.parsePointer(O.recordList({tag:O.tag,feature:O.pointer({featureParams:O.offset16,lookupListIndexes:O.uShortList})}))||[]};O.prototype.parseLookupList=function(n){return this.parsePointer(O.list(O.pointer(function(){var e=this.parseUShort();Pe.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(O.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};O.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var n=this.parseUShort(),e=this.parseUShort();Pe.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:O.offset32,featureTableSubstitutionOffset:O.offset32});return t})||[]};var Ae={getByte:Gc,getCard8:Gc,getUShort:Va,getCard16:Va,getShort:Cx,getULong:Go,getFixed:uh,getTag:Rx,getOffset:Lx,getBytes:Px,bytesToString:Ux,Parser:O};function Fx(n,e){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();var t;n.groupCount=t=e.parseULong(),n.glyphIndexMap={};for(var i=0;i<t;i+=1)for(var r=e.parseULong(),a=e.parseULong(),s=e.parseULong(),o=r;o<=a;o+=1)n.glyphIndexMap[o]=s,s++}function Ix(n,e,t,i,r){n.length=e.parseUShort(),n.language=e.parseUShort();var a;n.segCount=a=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};for(var s=new Ae.Parser(t,i+r+14),o=new Ae.Parser(t,i+r+16+a*2),l=new Ae.Parser(t,i+r+16+a*4),c=new Ae.Parser(t,i+r+16+a*6),u=i+r+16+a*8,f=0;f<a-1;f+=1)for(var h=void 0,d=s.parseUShort(),g=o.parseUShort(),v=l.parseShort(),m=c.parseUShort(),p=g;p<=d;p+=1)m!==0?(u=c.offset+c.relativeOffset-2,u+=m,u+=(p-g)*2,h=Ae.getUShort(t,u),h!==0&&(h=h+v&65535)):h=p+v&65535,n.glyphIndexMap[p]=h}function Ox(n,e){var t={};t.version=Ae.getUShort(n,e),Pe.argument(t.version===0,"cmap table version should be 0."),t.numTables=Ae.getUShort(n,e+2);for(var i=-1,r=t.numTables-1;r>=0;r-=1){var a=Ae.getUShort(n,e+4+r*8),s=Ae.getUShort(n,e+4+r*8+2);if(a===3&&(s===0||s===1||s===10)||a===0&&(s===0||s===1||s===2||s===3||s===4)){i=Ae.getULong(n,e+4+r*8+4);break}}if(i===-1)throw new Error("No valid cmap sub-tables found.");var o=new Ae.Parser(n,e+i);if(t.format=o.parseUShort(),t.format===12)Fx(t,o);else if(t.format===4)Ix(t,o,n,e,i);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function Nx(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function kx(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Bx(n){var e=!0,t;for(t=n.length-1;t>0;t-=1){var i=n.get(t);if(i.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var r=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(r=r.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),r=r.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var a=new ye.Table("cmap",r);for(a.segments=[],t=0;t<n.length;t+=1){for(var s=n.get(t),o=0;o<s.unicodes.length;o+=1)Nx(a,s.unicodes[o],t);a.segments=a.segments.sort(function(b,x){return b.start-x.start})}kx(a);var l=a.segments.length,c=0,u=[],f=[],h=[],d=[],g=[],v=[];for(t=0;t<l;t+=1){var m=a.segments[t];m.end<=65535&&m.start<=65535?(u=u.concat({name:"end_"+t,type:"USHORT",value:m.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:m.start}),h=h.concat({name:"idDelta_"+t,type:"SHORT",value:m.delta}),d=d.concat({name:"idRangeOffset_"+t,type:"USHORT",value:m.offset}),m.glyphId!==void 0&&(g=g.concat({name:"glyph_"+t,type:"USHORT",value:m.glyphId}))):c+=1,!e&&m.glyphIndex!==void 0&&(v=v.concat({name:"cmap12Start_"+t,type:"ULONG",value:m.start}),v=v.concat({name:"cmap12End_"+t,type:"ULONG",value:m.end}),v=v.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:m.glyphIndex}))}if(a.segCountX2=(l-c)*2,a.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,a.entrySelector=Math.log(a.searchRange/2)/Math.log(2),a.rangeShift=a.segCountX2-a.searchRange,a.fields=a.fields.concat(u),a.fields.push({name:"reservedPad",type:"USHORT",value:0}),a.fields=a.fields.concat(f),a.fields=a.fields.concat(h),a.fields=a.fields.concat(d),a.fields=a.fields.concat(g),a.cmap4Length=14+u.length*2+2+f.length*2+h.length*2+d.length*2+g.length*2,!e){var p=16+v.length*4;a.cmap12Offset=12+2*2+4+a.cmap4Length,a.fields=a.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:p},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:v.length/3}]),a.fields=a.fields.concat(v)}return a}var hh={parse:Ox,make:Bx},wa=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Gx=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],zx=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],pi=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function fh(n){this.font=n}fh.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.font.glyphs;if(t){for(var i=0;i<t.length;i+=1)for(var r=t.get(i),a=0;a<r.unicodes.length;a+=1)if(r.unicodes[a]===e)return i}return null};function dh(n){this.cmap=n}dh.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function Wa(n,e){this.encoding=n,this.charset=e}Wa.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function zo(n){switch(n.version){case 1:this.names=pi.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(var e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<pi.length?this.names[e]=pi[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-pi.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(var t=0;t<n.numberOfGlyphs;t++)this.names[t]=pi[t+n.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}zo.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};zo.prototype.glyphIndexToName=function(n){return this.names[n]};function Hx(n){for(var e,t=n.tables.cmap.glyphIndexMap,i=Object.keys(t),r=0;r<i.length;r+=1){var a=i[r],s=t[a];e=n.glyphs.get(s),e.addUnicode(parseInt(a))}for(var o=0;o<n.glyphs.length;o+=1)e=n.glyphs.get(o),n.cffEncoding?n.isCIDFont?e.name="gid"+o:e.name=n.cffEncoding.charset[o]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(o))}function Vx(n){n._IndexToUnicodeMap={};for(var e=n.tables.cmap.glyphIndexMap,t=Object.keys(e),i=0;i<t.length;i+=1){var r=t[i],a=e[r];n._IndexToUnicodeMap[a]===void 0?n._IndexToUnicodeMap[a]={unicodes:[parseInt(r)]}:n._IndexToUnicodeMap[a].unicodes.push(parseInt(r))}}function Wx(n,e){e.lowMemory?Vx(n):Hx(n)}function Xx(n,e,t,i,r){n.beginPath(),n.moveTo(e,t),n.lineTo(i,r),n.stroke()}var li={line:Xx};function qx(n,e){var t=e||new mt;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function kt(n){this.bindConstructorValues(n)}kt.prototype.bindConstructorValues=function(n){this.index=n.index||0,this.name=n.name||null,this.unicode=n.unicode||void 0,this.unicodes=n.unicodes||n.unicode!==void 0?[n.unicode]:[],"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),Object.defineProperty(this,"path",qx(this,n.path))};kt.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};kt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};kt.prototype.getPath=function(n,e,t,i,r){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var a,s;i||(i={});var o=i.xScale,l=i.yScale;if(i.hinting&&r&&r.hinting&&(s=this.path&&r.hinting.exec(this,t)),s)a=r.hinting.getCommands(s),n=Math.round(n),e=Math.round(e),o=l=1;else{a=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;o===void 0&&(o=c),l===void 0&&(l=c)}for(var u=new mt,f=0;f<a.length;f+=1){var h=a[f];h.type==="M"?u.moveTo(n+h.x*o,e+-h.y*l):h.type==="L"?u.lineTo(n+h.x*o,e+-h.y*l):h.type==="Q"?u.quadraticCurveTo(n+h.x1*o,e+-h.y1*l,n+h.x*o,e+-h.y*l):h.type==="C"?u.curveTo(n+h.x1*o,e+-h.y1*l,n+h.x2*o,e+-h.y2*l,n+h.x*o,e+-h.y*l):h.type==="Z"&&u.closePath()}return u};kt.prototype.getContours=function(){if(this.points===void 0)return[];for(var n=[],e=[],t=0;t<this.points.length;t+=1){var i=this.points[t];e.push(i),i.lastPointOfContour&&(n.push(e),e=[])}return Pe.argument(e.length===0,"There are still points left in the current contour."),n};kt.prototype.getMetrics=function(){for(var n=this.path.commands,e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}var a={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(a.xMin)||(a.xMin=0),isFinite(a.xMax)||(a.xMax=this.advanceWidth),isFinite(a.yMin)||(a.yMin=0),isFinite(a.yMax)||(a.yMax=0),a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a};kt.prototype.draw=function(n,e,t,i,r){this.getPath(e,t,i,r).draw(n)};kt.prototype.drawPoints=function(n,e,t,i){function r(f,h,d,g){n.beginPath();for(var v=0;v<f.length;v+=1)n.moveTo(h+f[v].x*g,d+f[v].y*g),n.arc(h+f[v].x*g,d+f[v].y*g,2,0,Math.PI*2,!1);n.closePath(),n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;for(var a=1/this.path.unitsPerEm*i,s=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var u=l.commands[c];u.x!==void 0&&s.push({x:u.x,y:-u.y}),u.x1!==void 0&&o.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&o.push({x:u.x2,y:-u.y2})}n.fillStyle="blue",r(s,e,t,a),n.fillStyle="red",r(o,e,t,a)};kt.prototype.drawMetrics=function(n,e,t,i){var r;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,r=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",li.line(n,e,-1e4,e,1e4),li.line(n,-1e4,t,1e4,t);var a=this.xMin||0,s=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;n.strokeStyle="blue",li.line(n,e+a*r,-1e4,e+a*r,1e4),li.line(n,e+o*r,-1e4,e+o*r,1e4),li.line(n,-1e4,t+-s*r,1e4,t+-s*r),li.line(n,-1e4,t+-l*r,1e4,t+-l*r),n.strokeStyle="green",li.line(n,e+c*r,-1e4,e+c*r,1e4)};function Ma(n,e,t){Object.defineProperty(n,e,{get:function(){return n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function Ho(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}Ho.prototype.get=function(n){if(this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());var e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(var i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+n:e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};Ho.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function Yx(n,e){return new kt({index:e,font:n})}function Zx(n,e,t,i,r,a){return function(){var s=new kt({index:e,font:n});return s.path=function(){t(s,i,r);var o=a(n.glyphs,s);return o.unitsPerEm=n.unitsPerEm,o},Ma(s,"xMin","_xMin"),Ma(s,"xMax","_xMax"),Ma(s,"yMin","_yMin"),Ma(s,"yMax","_yMax"),s}}function Kx(n,e,t,i){return function(){var r=new kt({index:e,font:n});return r.path=function(){var a=t(n,r,i);return a.unitsPerEm=n.unitsPerEm,a},r}}var mn={GlyphSet:Ho,glyphLoader:Yx,ttfGlyphLoader:Zx,cffGlyphLoader:Kx};function ph(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t+=1)if(!ph(n[t],e[t]))return!1;return!0}else return!1}function yo(n){var e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function Gn(n,e,t){var i=[],r=[],a=Ae.getCard16(n,e),s,o;if(a!==0){var l=Ae.getByte(n,e+2);s=e+(a+1)*l+2;for(var c=e+3,u=0;u<a+1;u+=1)i.push(Ae.getOffset(n,c,l)),c+=l;o=s+i[a]}else o=e+2;for(var f=0;f<i.length-1;f+=1){var h=Ae.getBytes(n,s+i[f],s+i[f+1]);t&&(h=t(h)),r.push(h)}return{objects:r,startOffset:e,endOffset:o}}function Jx(n,e){var t=[],i=Ae.getCard16(n,e),r,a;if(i!==0){var s=Ae.getByte(n,e+2);r=e+(i+1)*s+2;for(var o=e+3,l=0;l<i+1;l+=1)t.push(Ae.getOffset(n,o,s)),o+=s;a=r+t[i]}else a=e+2;return{offsets:t,startOffset:e,endOffset:a}}function $x(n,e,t,i,r){var a=Ae.getCard16(t,i),s=0;if(a!==0){var o=Ae.getByte(t,i+2);s=i+(a+1)*o+2}var l=Ae.getBytes(t,s+e[n],s+e[n+1]);return l}function jx(n){for(var e="",t=15,i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var r=n.parseByte(),a=r>>4,s=r&15;if(a===t||(e+=i[a],s===t))break;e+=i[s]}return parseFloat(e)}function Qx(n,e){var t,i,r,a;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),r=n.parseByte(),a=n.parseByte(),t<<24|i<<16|r<<8|a;if(e===30)return jx(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function e_(n){for(var e={},t=0;t<n.length;t+=1){var i=n[t][0],r=n[t][1],a=void 0;if(r.length===1?a=r[0]:a=r,e.hasOwnProperty(i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=a}return e}function mh(n,e,t){e=e!==void 0?e:0;var i=new Ae.Parser(n,e),r=[],a=[];for(t=t!==void 0?t:n.length;i.relativeOffset<t;){var s=i.parseByte();s<=21?(s===12&&(s=1200+i.parseByte()),r.push([s,a]),a=[]):a.push(Qx(i,s))}return e_(r)}function Sr(n,e){return e<=390?e=wa[e]:e=n[e-391],e}function gh(n,e,t){for(var i={},r,a=0;a<e.length;a+=1){var s=e[a];if(Array.isArray(s.type)){var o=[];o.length=s.type.length;for(var l=0;l<s.type.length;l++)r=n[s.op]!==void 0?n[s.op][l]:void 0,r===void 0&&(r=s.value!==void 0&&s.value[l]!==void 0?s.value[l]:null),s.type[l]==="SID"&&(r=Sr(t,r)),o[l]=r;i[s.name]=o}else r=n[s.op],r===void 0&&(r=s.value!==void 0?s.value:null),s.type==="SID"&&(r=Sr(t,r)),i[s.name]=r}return i}function t_(n,e){var t={};return t.formatMajor=Ae.getCard8(n,e),t.formatMinor=Ae.getCard8(n,e+1),t.size=Ae.getCard8(n,e+2),t.offsetSize=Ae.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4,t}var vh=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],xh=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function n_(n,e){var t=mh(n,0,n.byteLength);return gh(t,vh,e)}function _h(n,e,t,i){var r=mh(n,e,t);return gh(r,xh,i)}function Hc(n,e,t,i){for(var r=[],a=0;a<t.length;a+=1){var s=new DataView(new Uint8Array(t[a]).buffer),o=n_(s,i);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var u=_h(n,c+e,l,i);if(o._defaultWidthX=u.defaultWidthX,o._nominalWidthX=u.nominalWidthX,u.subrs!==0){var f=c+u.subrs,h=Gn(n,f+e);o._subrs=h.objects,o._subrsBias=yo(o._subrs)}o._privateDict=u}r.push(o)}return r}function i_(n,e,t,i){var r,a,s=new Ae.Parser(n,e);t-=1;var o=[".notdef"],l=s.parseCard8();if(l===0)for(var c=0;c<t;c+=1)r=s.parseSID(),o.push(Sr(i,r));else if(l===1)for(;o.length<=t;){r=s.parseSID(),a=s.parseCard8();for(var u=0;u<=a;u+=1)o.push(Sr(i,r)),r+=1}else if(l===2)for(;o.length<=t;){r=s.parseSID(),a=s.parseCard16();for(var f=0;f<=a;f+=1)o.push(Sr(i,r)),r+=1}else throw new Error("Unknown charset format "+l);return o}function r_(n,e,t){var i,r={},a=new Ae.Parser(n,e),s=a.parseCard8();if(s===0)for(var o=a.parseCard8(),l=0;l<o;l+=1)i=a.parseCard8(),r[i]=l;else if(s===1){var c=a.parseCard8();i=1;for(var u=0;u<c;u+=1)for(var f=a.parseCard8(),h=a.parseCard8(),d=f;d<=f+h;d+=1)r[d]=i,i+=1}else throw new Error("Unknown encoding format "+s);return new Wa(r,t)}function Vc(n,e,t){var i,r,a,s,o=new mt,l=[],c=0,u=!1,f=!1,h=0,d=0,g,v,m,p;if(n.isCIDFont){var b=n.tables.cff.topDict._fdSelect[e.index],x=n.tables.cff.topDict._fdArray[b];g=x._subrs,v=x._subrsBias,m=x._defaultWidthX,p=x._nominalWidthX}else g=n.tables.cff.topDict._subrs,v=n.tables.cff.topDict._subrsBias,m=n.tables.cff.topDict._defaultWidthX,p=n.tables.cff.topDict._nominalWidthX;var M=m;function P(C,E){f&&o.closePath(),o.moveTo(C,E),f=!0}function w(){var C;C=l.length%2!==0,C&&!u&&(M=l.shift()+p),c+=l.length>>1,l.length=0,u=!0}function T(C){for(var E,y,R,X,N,V,W,z,q,H,se,fe,ie=0;ie<C.length;){var Ce=C[ie];switch(ie+=1,Ce){case 1:w();break;case 3:w();break;case 4:l.length>1&&!u&&(M=l.shift()+p,u=!0),d+=l.pop(),P(h,d);break;case 5:for(;l.length>0;)h+=l.shift(),d+=l.shift(),o.lineTo(h,d);break;case 6:for(;l.length>0&&(h+=l.shift(),o.lineTo(h,d),l.length!==0);)d+=l.shift(),o.lineTo(h,d);break;case 7:for(;l.length>0&&(d+=l.shift(),o.lineTo(h,d),l.length!==0);)h+=l.shift(),o.lineTo(h,d);break;case 8:for(;l.length>0;)i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s+l.shift(),o.curveTo(i,r,a,s,h,d);break;case 10:N=l.pop()+v,V=g[N],V&&T(V);break;case 11:return;case 12:switch(Ce=C[ie],ie+=1,Ce){case 35:i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),W=a+l.shift(),z=s+l.shift(),q=W+l.shift(),H=z+l.shift(),se=q+l.shift(),fe=H+l.shift(),h=se+l.shift(),d=fe+l.shift(),l.shift(),o.curveTo(i,r,a,s,W,z),o.curveTo(q,H,se,fe,h,d);break;case 34:i=h+l.shift(),r=d,a=i+l.shift(),s=r+l.shift(),W=a+l.shift(),z=s,q=W+l.shift(),H=s,se=q+l.shift(),fe=d,h=se+l.shift(),o.curveTo(i,r,a,s,W,z),o.curveTo(q,H,se,fe,h,d);break;case 36:i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),W=a+l.shift(),z=s,q=W+l.shift(),H=s,se=q+l.shift(),fe=H+l.shift(),h=se+l.shift(),o.curveTo(i,r,a,s,W,z),o.curveTo(q,H,se,fe,h,d);break;case 37:i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),W=a+l.shift(),z=s+l.shift(),q=W+l.shift(),H=z+l.shift(),se=q+l.shift(),fe=H+l.shift(),Math.abs(se-h)>Math.abs(fe-d)?h=se+l.shift():d=fe+l.shift(),o.curveTo(i,r,a,s,W,z),o.curveTo(q,H,se,fe,h,d);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Ce),l.length=0}break;case 14:l.length>0&&!u&&(M=l.shift()+p,u=!0),f&&(o.closePath(),f=!1);break;case 18:w();break;case 19:case 20:w(),ie+=c+7>>3;break;case 21:l.length>2&&!u&&(M=l.shift()+p,u=!0),d+=l.pop(),h+=l.pop(),P(h,d);break;case 22:l.length>1&&!u&&(M=l.shift()+p,u=!0),h+=l.pop(),P(h,d);break;case 23:w();break;case 24:for(;l.length>2;)i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s+l.shift(),o.curveTo(i,r,a,s,h,d);h+=l.shift(),d+=l.shift(),o.lineTo(h,d);break;case 25:for(;l.length>6;)h+=l.shift(),d+=l.shift(),o.lineTo(h,d);i=h+l.shift(),r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s+l.shift(),o.curveTo(i,r,a,s,h,d);break;case 26:for(l.length%2&&(h+=l.shift());l.length>0;)i=h,r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a,d=s+l.shift(),o.curveTo(i,r,a,s,h,d);break;case 27:for(l.length%2&&(d+=l.shift());l.length>0;)i=h+l.shift(),r=d,a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s,o.curveTo(i,r,a,s,h,d);break;case 28:E=C[ie],y=C[ie+1],l.push((E<<24|y<<16)>>16),ie+=2;break;case 29:N=l.pop()+n.gsubrsBias,V=n.gsubrs[N],V&&T(V);break;case 30:for(;l.length>0&&(i=h,r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s+(l.length===1?l.shift():0),o.curveTo(i,r,a,s,h,d),l.length!==0);)i=h+l.shift(),r=d,a=i+l.shift(),s=r+l.shift(),d=s+l.shift(),h=a+(l.length===1?l.shift():0),o.curveTo(i,r,a,s,h,d);break;case 31:for(;l.length>0&&(i=h+l.shift(),r=d,a=i+l.shift(),s=r+l.shift(),d=s+l.shift(),h=a+(l.length===1?l.shift():0),o.curveTo(i,r,a,s,h,d),l.length!==0);)i=h,r=d+l.shift(),a=i+l.shift(),s=r+l.shift(),h=a+l.shift(),d=s+(l.length===1?l.shift():0),o.curveTo(i,r,a,s,h,d);break;default:Ce<32?console.log("Glyph "+e.index+": unknown operator "+Ce):Ce<247?l.push(Ce-139):Ce<251?(E=C[ie],ie+=1,l.push((Ce-247)*256+E+108)):Ce<255?(E=C[ie],ie+=1,l.push(-(Ce-251)*256-E-108)):(E=C[ie],y=C[ie+1],R=C[ie+2],X=C[ie+3],ie+=4,l.push((E<<24|y<<16|R<<8|X)/65536))}}}return T(t),e.advanceWidth=M,o}function a_(n,e,t,i){var r=[],a,s=new Ae.Parser(n,e),o=s.parseCard8();if(o===0)for(var l=0;l<t;l++){if(a=s.parseCard8(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");r.push(a)}else if(o===3){var c=s.parseCard16(),u=s.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var f,h=0;h<c;h++){if(a=s.parseCard8(),f=s.parseCard16(),a>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+i+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;u<f;u++)r.push(a);u=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return r}function s_(n,e,t,i){t.tables.cff={};var r=t_(n,e),a=Gn(n,r.endOffset,Ae.bytesToString),s=Gn(n,a.endOffset),o=Gn(n,s.endOffset,Ae.bytesToString),l=Gn(n,o.endOffset);t.gsubrs=l.objects,t.gsubrsBias=yo(t.gsubrs);var c=Hc(n,e,s.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var u=c[0];if(t.tables.cff.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=u.fdArray,h=u.fdSelect;if(f===0||h===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;var d=Gn(n,f),g=Hc(n,e,d.objects,o.objects);u._fdArray=g,h+=e,u._fdSelect=a_(n,h,t.numGlyphs,g.length)}var v=e+u.private[1],m=_h(n,v,u.private[0],o.objects);if(t.defaultWidthX=m.defaultWidthX,t.nominalWidthX=m.nominalWidthX,m.subrs!==0){var p=v+m.subrs,b=Gn(n,p);t.subrs=b.objects,t.subrsBias=yo(t.subrs)}else t.subrs=[],t.subrsBias=0;var x;i.lowMemory?(x=Jx(n,e+u.charStrings),t.nGlyphs=x.offsets.length):(x=Gn(n,e+u.charStrings),t.nGlyphs=x.objects.length);var M=i_(n,e+u.charset,t.nGlyphs,o.objects);if(u.encoding===0?t.cffEncoding=new Wa(Gx,M):u.encoding===1?t.cffEncoding=new Wa(zx,M):t.cffEncoding=r_(n,e+u.encoding,M),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new mn.GlyphSet(t),i.lowMemory)t._push=function(T){var C=$x(T,x.offsets,n,e+u.charStrings);t.glyphs.push(T,mn.cffGlyphLoader(t,T,Vc,C))};else for(var P=0;P<t.nGlyphs;P+=1){var w=x.objects[P];t.glyphs.push(P,mn.cffGlyphLoader(t,P,Vc,w))}}function yh(n,e){var t,i=wa.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+wa.length:(t=wa.length+e.length,e.push(n)),t}function o_(){return new ye.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function l_(n){var e=new ye.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function Sh(n,e,t){for(var i={},r=0;r<n.length;r+=1){var a=n[r],s=e[a.name];s!==void 0&&!ph(s,a.value)&&(a.type==="SID"&&(s=yh(s,t)),i[a.op]={name:a.name,type:a.type,value:s})}return i}function Wc(n,e){var t=new ye.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Sh(vh,n,e),t}function Xc(n){var e=new ye.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function c_(n){var e=new ye.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function u_(){return new ye.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function h_(n,e){for(var t=new ye.Record("Charsets",[{name:"format",type:"Card8",value:0}]),i=0;i<n.length;i+=1){var r=n[i],a=yh(r,e);t.fields.push({name:"glyph_"+i,type:"SID",value:a})}return t}function f_(n){var e=[],t=n.path;e.push({name:"width",type:"NUMBER",value:n.advanceWidth});for(var i=0,r=0,a=0;a<t.commands.length;a+=1){var s=void 0,o=void 0,l=t.commands[a];if(l.type==="Q"){var c=.3333333333333333,u=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*i+u*l.x1),y1:Math.round(c*r+u*l.y1),x2:Math.round(c*l.x+u*l.x1),y2:Math.round(c*l.y+u*l.y1)}}if(l.type==="M")s=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="L")s=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-i),h=Math.round(l.y1-r),d=Math.round(l.x2-l.x1),g=Math.round(l.y2-l.y1);s=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:f}),e.push({name:"dy1",type:"NUMBER",value:h}),e.push({name:"dx2",type:"NUMBER",value:d}),e.push({name:"dy2",type:"NUMBER",value:g}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),i=Math.round(l.x),r=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function d_(n){for(var e=new ye.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<n.length;t+=1){var i=n.get(t),r=f_(i);e.charStrings.push({name:i.name,type:"CHARSTRING",value:r})}return e}function p_(n,e){var t=new ye.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Sh(xh,n,e),t}function m_(n,e){for(var t=new ye.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,r={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a={},s=[],o,l=1;l<n.length;l+=1)o=n.get(l),s.push(o.name);var c=[];t.header=o_(),t.nameIndex=l_([e.postScriptName]);var u=Wc(r,c);t.topDictIndex=Xc(u),t.globalSubrIndex=u_(),t.charsets=h_(s,c),t.charStringsIndex=d_(n),t.privateDict=p_(a,c),t.stringIndex=c_(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return r.charset=f,r.encoding=0,r.charStrings=r.charset+t.charsets.sizeOf(),r.private[1]=r.charStrings+t.charStringsIndex.sizeOf(),u=Wc(r,c),t.topDictIndex=Xc(u),t}var Mh={parse:s_,make:m_};function g_(n,e){var t={},i=new Ae.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),Pe.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function v_(n){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new ye.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var bh={parse:g_,make:v_};function x_(n,e){var t={},i=new Ae.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function __(n){return new ye.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var Eh={parse:x_,make:__};function y_(n,e,t,i,r){for(var a,s,o=new Ae.Parser(n,e),l=0;l<i;l+=1){l<t&&(a=o.parseUShort(),s=o.parseShort());var c=r.get(l);c.advanceWidth=a,c.leftSideBearing=s}}function S_(n,e,t,i,r){n._hmtxTableData={};for(var a,s,o=new Ae.Parser(e,t),l=0;l<r;l+=1)l<i&&(a=o.parseUShort(),s=o.parseShort()),n._hmtxTableData[l]={advanceWidth:a,leftSideBearing:s}}function M_(n,e,t,i,r,a,s){s.lowMemory?S_(n,e,t,i,r):y_(e,t,i,r,a)}function b_(n){for(var e=new ye.Table("hmtx",[]),t=0;t<n.length;t+=1){var i=n.get(t),r=i.advanceWidth||0,a=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:r}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:a})}return e}var Th={parse:M_,make:b_};function E_(n){for(var e=new ye.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]),t="",i=12+n.length*4,r=0;r<n.length;++r){var a=t.indexOf(n[r]);a<0&&(a=t.length,t+=n[r]),e.fields.push({name:"offset "+r,type:"USHORT",value:i+a}),e.fields.push({name:"length "+r,type:"USHORT",value:n[r].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function T_(n,e){var t=new Ae.Parser(n,e),i=t.parseULong();Pe.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var r=t.parseULong(),a=[],s=0;s<r;s++){for(var o="",l=e+t.parseUShort(),c=t.parseUShort(),u=l;u<l+c;++u)o+=String.fromCharCode(n.getInt8(u));a.push(o)}return a}var Ah={make:E_,parse:T_};function A_(n,e){var t={},i=new Ae.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function w_(n){return new ye.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var wh={parse:A_,make:w_},Ch=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Rh={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},C_={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Lh={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function R_(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return Rh[e];case 3:return Lh[e]}}var So="utf-16",L_={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},P_={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Ph(n,e,t){switch(n){case 0:return So;case 1:return P_[t]||L_[e];case 3:if(e===1||e===10)return So;break}}function U_(n,e,t){for(var i={},r=new Ae.Parser(n,e),a=r.parseUShort(),s=r.parseUShort(),o=r.offset+r.parseUShort(),l=0;l<s;l++){var c=r.parseUShort(),u=r.parseUShort(),f=r.parseUShort(),h=r.parseUShort(),d=Ch[h]||h,g=r.parseUShort(),v=r.parseUShort(),m=R_(c,f,t),p=Ph(c,u,f);if(p!==void 0&&m!==void 0){var b=void 0;if(p===So?b=tr.UTF16(n,o+v,g):b=tr.MACSTRING(n,o+v,g,p),b){var x=i[d];x===void 0&&(x=i[d]={}),x[m]=b}}}return a===1&&r.parseUShort(),i}function Vs(n){var e={};for(var t in n)e[n[t]]=parseInt(t);return e}function qc(n,e,t,i,r,a){return new ye.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:r},{name:"offset",type:"USHORT",value:a}])}function D_(n,e){var t=n.length,i=e.length-t+1;e:for(var r=0;r<i;r++)for(;r<i;r++){for(var a=0;a<t;a++)if(e[r+a]!==n[a])continue e;return r}return-1}function Yc(n,e){var t=D_(n,e);if(t<0){t=e.length;for(var i=0,r=n.length;i<r;++i)e.push(n[i])}return t}function F_(n,e){var t,i=[],r={},a=Vs(Ch);for(var s in n){var o=a[s];if(o===void 0&&(o=s),t=parseInt(o),isNaN(t))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');r[t]=n[s],i.push(t)}for(var l=Vs(Rh),c=Vs(Lh),u=[],f=[],h=0;h<i.length;h++){t=i[h];var d=r[t];for(var g in d){var v=d[g],m=1,p=l[g],b=C_[p],x=Ph(m,b,p),M=pe.MACSTRING(v,x);M===void 0&&(m=0,p=e.indexOf(g),p<0&&(p=e.length,e.push(g)),b=4,M=pe.UTF16(v));var P=Yc(M,f);u.push(qc(m,b,p,t,M.length,P));var w=c[g];if(w!==void 0){var T=pe.UTF16(v),C=Yc(T,f);u.push(qc(3,1,w,t,T.length,C))}}}u.sort(function(R,X){return R.platformID-X.platformID||R.encodingID-X.encodingID||R.languageID-X.languageID||R.nameID-X.nameID});for(var E=new ye.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),y=0;y<u.length;y++)E.fields.push({name:"record_"+y,type:"RECORD",value:u[y]});return E.fields.push({name:"strings",type:"LITERAL",value:f}),E}var Uh={parse:U_,make:F_},Mo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function I_(n){for(var e=0;e<Mo.length;e+=1){var t=Mo[e];if(n>=t.begin&&n<t.end)return e}return-1}function O_(n,e){var t={},i=new Ae.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(var r=0;r<10;r++)t.panose[r]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function N_(n){return new ye.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var bo={parse:O_,make:N_,unicodeRanges:Mo,getUnicodeRange:I_};function k_(n,e){var t={},i=new Ae.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=pi.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)t.glyphNameIndex[r]=i.parseUShort();t.names=[];for(var a=0;a<t.numberOfGlyphs;a++)if(t.glyphNameIndex[a]>=pi.length){var s=i.parseChar();t.names.push(i.parseString(s))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var o=0;o<t.numberOfGlyphs;o++)t.offset[o]=i.parseChar();break}return t}function B_(){return new ye.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Dh={parse:k_,make:B_},tn=new Array(9);tn[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(O.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(O.coverage),substitute:this.parseOffset16List()};Pe.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};tn[2]=function(){var e=this.parseUShort();return Pe.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(O.coverage),sequences:this.parseListOfLists()}};tn[3]=function(){var e=this.parseUShort();return Pe.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(O.coverage),alternateSets:this.parseListOfLists()}};tn[4]=function(){var e=this.parseUShort();return Pe.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(O.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Zi={sequenceIndex:O.uShort,lookupListIndex:O.uShort};tn[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(O.coverage),ruleSets:this.parseListOfLists(function(){var a=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(s,Zi)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(O.coverage),classDef:this.parsePointer(O.classDef),classSets:this.parseListOfLists(function(){var a=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(s,Zi)}})};if(t===3){var i=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,O.pointer(O.coverage)),lookupRecords:this.parseRecordList(r,Zi)}}Pe.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};tn[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(O.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zi)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(O.coverage),backtrackClassDef:this.parsePointer(O.classDef),inputClassDef:this.parsePointer(O.classDef),lookaheadClassDef:this.parsePointer(O.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Zi)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(O.pointer(O.coverage)),inputCoverage:this.parseList(O.pointer(O.coverage)),lookaheadCoverage:this.parseList(O.pointer(O.coverage)),lookupRecords:this.parseRecordList(Zi)};Pe.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};tn[7]=function(){var e=this.parseUShort();Pe.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),i=new O(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:tn[t].call(i)}};tn[8]=function(){var e=this.parseUShort();return Pe.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(O.coverage),backtrackCoverage:this.parseList(O.pointer(O.coverage)),lookaheadCoverage:this.parseList(O.pointer(O.coverage)),substitutes:this.parseUShortList()}};function G_(n,e){e=e||0;var t=new O(n,e),i=t.parseVersion(1);return Pe.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(tn)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(tn),variations:t.parseFeatureVariationsList()}}var sr=new Array(9);sr[1]=function(e){return e.substFormat===1?new ye.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new ye.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)}].concat(ye.ushortList("substitute",e.substitute)))};sr[2]=function(e){return Pe.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new ye.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)}].concat(ye.tableList("seqSet",e.sequences,function(t){return new ye.Table("sequenceSetTable",ye.ushortList("sequence",t))})))};sr[3]=function(e){return Pe.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new ye.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)}].concat(ye.tableList("altSet",e.alternateSets,function(t){return new ye.Table("alternateSetTable",ye.ushortList("alternate",t))})))};sr[4]=function(e){return Pe.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new ye.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)}].concat(ye.tableList("ligSet",e.ligatureSets,function(t){return new ye.Table("ligatureSetTable",ye.tableList("ligature",t,function(i){return new ye.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(ye.ushortList("component",i.components,i.components.length+1)))}))})))};sr[6]=function(e){if(e.substFormat===1){var t=new ye.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new ye.Coverage(e.coverage)}].concat(ye.tableList("chainRuleSet",e.chainRuleSets,function(a){return new ye.Table("chainRuleSetTable",ye.tableList("chainRule",a,function(s){var o=ye.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(ye.ushortList("inputGlyph",s.input,s.input.length+1)).concat(ye.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(ye.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new ye.Table("chainRuleTable",o)}))})));return t}else if(e.substFormat===2)Pe.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var i=[{name:"substFormat",type:"USHORT",value:e.substFormat}];i.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(a,s){i.push({name:"backtrackCoverage"+s,type:"TABLE",value:new ye.Coverage(a)})}),i.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(a,s){i.push({name:"inputCoverage"+s,type:"TABLE",value:new ye.Coverage(a)})}),i.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(a,s){i.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new ye.Coverage(a)})}),i.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(a,s){i=i.concat({name:"sequenceIndex"+s,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:a.lookupListIndex})});var r=new ye.Table("chainContextTable",i);return r}Pe.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function z_(n){return new ye.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ye.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new ye.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new ye.LookupList(n.lookups,sr)}])}var Fh={parse:G_,make:z_};function H_(n,e){var t=new Ae.Parser(n,e),i=t.parseULong();Pe.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var r=t.parseULong(),a={},s=0;s<r;s++){var o=t.parseTag(),l=t.parseULong(),c=t.parseULong(),u=tr.UTF8(n,e+l,c);a[o]=u}return a}function V_(n){var e=Object.keys(n).length,t="",i=16+e*12,r=new ye.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(var a in n){var s=t.length;t+=n[a],r.fields.push({name:"tag "+a,type:"TAG",value:a}),r.fields.push({name:"offset "+a,type:"ULONG",value:i+s}),r.fields.push({name:"length "+a,type:"ULONG",value:n[a].length})}return r.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),r}var Ih={parse:H_,make:V_};function W_(n,e){var t=new O(n,e),i=t.parseUShort();Pe.argument(i===0,"Only COLRv0 supported.");var r=t.parseUShort(),a=t.parseOffset32(),s=t.parseOffset32(),o=t.parseUShort();t.relativeOffset=a;var l=t.parseRecordList(r,{glyphID:O.uShort,firstLayerIndex:O.uShort,numLayers:O.uShort});t.relativeOffset=s;var c=t.parseRecordList(o,{glyphID:O.uShort,paletteIndex:O.uShort});return{version:i,baseGlyphRecords:l,layerRecords:c}}function X_(n){var e=n.version;e===void 0&&(e=0);var t=n.baseGlyphRecords;t===void 0&&(t=[]);var i=n.layerRecords;i===void 0&&(i=[]),Pe.argument(e===0,"Only COLRv0 supported.");var r=14,a=r+t.length*6;return new ye.Table("COLR",[{name:"version",type:"USHORT",value:e},{name:"numBaseGlyphRecords",type:"USHORT",value:t.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:r},{name:"layerRecordsOffset",type:"ULONG",value:a},{name:"numLayerRecords",type:"USHORT",value:i.length}].concat(t.map(function(s,o){return[{name:"glyphID_"+o,type:"USHORT",value:s.glyphID},{name:"firstLayerIndex_"+o,type:"USHORT",value:s.firstLayerIndex},{name:"numLayers_"+o,type:"USHORT",value:s.numLayers}]}).flat(),i.map(function(s,o){return[{name:"LayerGlyphID_"+o,type:"USHORT",value:s.glyphID},{name:"paletteIndex_"+o,type:"USHORT",value:s.paletteIndex}]}).flat()))}var Oh={parse:W_,make:X_};function q_(n,e){var t=new O(n,e),i=t.parseShort(),r=t.parseShort(),a=t.parseShort(),s=t.parseShort(),o=t.parseOffset32(),l=t.parseUShortList(a);t.relativeOffset=o;var c=t.parseULongList(s);return{version:i,numPaletteEntries:r,colorRecords:c,colorRecordIndices:l}}function Y_(n){var e=n.version;e===void 0&&(e=0);var t=n.numPaletteEntries;t===void 0&&(t=0);var i=n.colorRecords;i===void 0&&(i=[]);var r=n.colorRecordIndices;return r===void 0&&(r=[0]),Pe.argument(e===0,"Only CPALv0 are supported."),Pe.argument(i.length,"No colorRecords given."),Pe.argument(r.length,"No colorRecordIndices given."),Pe.argument(!t&&r.length==1,"Can't infer numPaletteEntries on multiple colorRecordIndices"),new ye.Table("CPAL",[{name:"version",type:"USHORT",value:e},{name:"numPaletteEntries",type:"USHORT",value:t||i.length},{name:"numPalettes",type:"USHORT",value:r.length},{name:"numColorRecords",type:"USHORT",value:i.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*r.length}].concat(r.map(function(a,s){return{name:"colorRecordIndices_"+s,type:"USHORT",value:a}}),i.map(function(a,s){return{name:"colorRecords_"+s,type:"ULONG",value:a}})))}var Nh={parse:q_,make:Y_};function Zc(n){return Math.log(n)/Math.log(2)|0}function Vo(n){for(;n.length%4!==0;)n.push(0);for(var e=0,t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function Kc(n,e,t,i){return new ye.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function kh(n){var e=new ye.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;var t=Math.pow(2,Zc(e.numTables));e.searchRange=16*t,e.entrySelector=Zc(t),e.rangeShift=e.numTables*16-e.searchRange;for(var i=[],r=[],a=e.sizeOf()+Kc().sizeOf()*e.numTables;a%4!==0;)a+=1,r.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<n.length;s+=1){var o=n[s];Pe.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=Kc(o.tableName,Vo(o.encode()),a,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),r.push({name:o.tableName+" table",type:"RECORD",value:o}),a+=l,Pe.argument(!isNaN(a),"Something went wrong calculating the offset.");a%4!==0;)a+=1,r.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(u,f){return u.value.tag>f.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(r),e}function Jc(n,e,t){for(var i=0;i<e.length;i+=1){var r=n.charToGlyphIndex(e[i]);if(r>0){var a=n.glyphs.get(r);return a.getMetrics()}}return t}function Z_(n){for(var e=0,t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function K_(n){for(var e=[],t=[],i=[],r=[],a=[],s=[],o=[],l,c=0,u=0,f=0,h=0,d=0,g=0;g<n.glyphs.length;g+=1){var v=n.glyphs.get(g),m=v.unicode|0;if(isNaN(v.advanceWidth))throw new Error("Glyph "+v.name+" ("+g+"): advanceWidth is not a number.");(l>m||l===void 0)&&m>0&&(l=m),c<m&&(c=m);var p=bo.getUnicodeRange(m);if(p<32)u|=1<<p;else if(p<64)f|=1<<p-32;else if(p<96)h|=1<<p-64;else if(p<123)d|=1<<p-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(v.name!==".notdef"){var b=v.getMetrics();e.push(b.xMin),t.push(b.yMin),i.push(b.xMax),r.push(b.yMax),s.push(b.leftSideBearing),o.push(b.rightSideBearing),a.push(v.advanceWidth)}}var x={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,r),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:Z_(a),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,o)};x.ascender=n.ascender,x.descender=n.descender;var M=bh.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:x.xMin,yMin:x.yMin,xMax:x.xMax,yMax:x.yMax,lowestRecPPEM:3,createdTimestamp:n.createdTimestamp}),P=Eh.make({ascender:x.ascender,descender:x.descender,advanceWidthMax:x.advanceWidthMax,minLeftSideBearing:x.minLeftSideBearing,minRightSideBearing:x.minRightSideBearing,xMaxExtent:x.maxLeftSideBearing+(x.xMax-x.xMin),numberOfHMetrics:n.glyphs.length}),w=wh.make(n.glyphs.length),T=bo.make(Object.assign({xAvgCharWidth:Math.round(x.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:f,ulUnicodeRange3:h,ulUnicodeRange4:d,sTypoAscender:x.ascender,sTypoDescender:x.descender,sTypoLineGap:0,usWinAscent:x.yMax,usWinDescent:Math.abs(x.yMin),ulCodePageRange1:1,sxHeight:Jc(n,"xyvw",{yMax:Math.round(x.ascender/2)}).yMax,sCapHeight:Jc(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",x).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),C=Th.make(n.glyphs),E=hh.make(n.glyphs),y=n.getEnglishName("fontFamily"),R=n.getEnglishName("fontSubfamily"),X=y+" "+R,N=n.getEnglishName("postScriptName");N||(N=y.replace(/\s/g,"")+"-"+R);var V={};for(var W in n.names)V[W]=n.names[W];V.uniqueID||(V.uniqueID={en:n.getEnglishName("manufacturer")+":"+X}),V.postScriptName||(V.postScriptName={en:N}),V.preferredFamily||(V.preferredFamily=n.names.fontFamily),V.preferredSubfamily||(V.preferredSubfamily=n.names.fontSubfamily);var z=[],q=Uh.make(V,z),H=z.length>0?Ah.make(z):void 0,se=Dh.make(),fe=Mh.make(n.glyphs,{version:n.getEnglishName("version"),fullName:X,familyName:y,weightName:R,postScriptName:N,unitsPerEm:n.unitsPerEm,fontBBox:[0,x.yMin,x.ascender,x.advanceWidthMax]}),ie=n.metas&&Object.keys(n.metas).length>0?Ih.make(n.metas):void 0,Ce=[M,P,w,T,q,E,se,fe,C];H&&Ce.push(H),n.tables.gsub&&Ce.push(Fh.make(n.tables.gsub)),n.tables.cpal&&Ce.push(Nh.make(n.tables.cpal)),n.tables.colr&&Ce.push(Oh.make(n.tables.colr)),ie&&Ce.push(ie);for(var Je=kh(Ce),Y=Je.encode(),ae=Vo(Y),Se=Je.fields,ce=!1,Ie=0;Ie<Se.length;Ie+=1)if(Se[Ie].name==="head table"){Se[Ie].value.checkSumAdjustment=2981146554-ae,ce=!0;break}if(!ce)throw new Error("Could not find head table with checkSum to adjust.");return Je}var J_={make:kh,fontToTable:K_,computeCheckSum:Vo};function Ws(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,a=n[r].tag;if(a===e)return r;a<e?t=r+1:i=r-1}return-t-1}function $c(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,a=n[r];if(a===e)return r;a<e?t=r+1:i=r-1}return-t-1}function jc(n,e){for(var t,i=0,r=n.length-1;i<=r;){var a=i+r>>>1;t=n[a];var s=t.start;if(s===e)return t;s<e?i=a+1:r=a-1}if(i>0)return t=n[i-1],e>t.end?0:t}function Ir(n,e){this.font=n,this.tableName=e}Ir.prototype={searchTag:Ws,binSearch:$c,getTable:function(n){var e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var n=this.getTable();if(n){for(var e=!1,t=0;t<n.scripts.length;t++){var i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(n,e){var t=this.getTable(e);if(t){n=n||"DFLT";var i=t.scripts,r=Ws(t.scripts,n);if(r>=0)return i[r].script;if(e){var a={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-r,0,a),a.script}}},getLangSysTable:function(n,e,t){var i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;var r=Ws(i.langSysRecords,e);if(r>=0)return i.langSysRecords[r].langSys;if(t){var a={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-r,0,a),a.langSys}}},getFeatureTable:function(n,e,t,i){var r=this.getLangSysTable(n,e,i);if(r){for(var a,s=r.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<s.length;l++)if(a=o[s[l]],a.tag===t)return a.feature;if(i){var c=o.length;return Pe.assert(c===0||t>=o[c-1].tag,"Features must be added in alphabetical order."),a={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(a),s.push(c),a.feature}}},getLookupTables:function(n,e,t,i,r){var a=this.getFeatureTable(n,e,t,r),s=[];if(a){for(var o,l=a.lookupListIndexes,c=this.font.tables[this.tableName].lookups,u=0;u<l.length;u++)o=c[l[u]],o.lookupType===i&&s.push(o);if(s.length===0&&r){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(o),l.push(f),[o]}}return s},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:var t=jc(n.ranges,e);return t?t.classId:0}},getCoverageIndex:function(n,e){switch(n.format){case 1:var t=$c(n.glyphs,e);return t>=0?t:-1;case 2:var i=jc(n.ranges,e);return i?i.index+e-i.start:-1}},expandCoverage:function(n){if(n.format===1)return n.glyphs;for(var e=[],t=n.ranges,i=0;i<t.length;i++)for(var r=t[i],a=r.start,s=r.end,o=a;o<=s;o++)e.push(o);return e}};function Or(n){Ir.call(this,n,"gpos")}Or.prototype=Ir.prototype;Or.prototype.init=function(){var n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Or.prototype.getKerningValue=function(n,e,t){for(var i=0;i<n.length;i++)for(var r=n[i].subtables,a=0;a<r.length;a++){var s=r[a],o=this.getCoverageIndex(s.coverage,e);if(!(o<0))switch(s.posFormat){case 1:for(var l=s.pairSets[o],c=0;c<l.length;c++){var u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(s.classDef1,e),h=this.getGlyphClass(s.classDef2,t),d=s.classRecords[f][h];return d.value1&&d.value1.xAdvance||0}}return 0};Or.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};function Bt(n){Ir.call(this,n,"gsub")}function $_(n,e){var t=n.length;if(t!==e.length)return!1;for(var i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function Wo(n,e,t){for(var i=n.subtables,r=0;r<i.length;r++){var a=i[r];if(a.substFormat===e)return a}if(t)return i.push(t),t}Bt.prototype=Ir.prototype;Bt.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Bt.prototype.getSingle=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,1),a=0;a<r.length;a++)for(var s=r[a].subtables,o=0;o<s.length;o++){var l=s[o],c=this.expandCoverage(l.coverage),u=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(u=0;u<c.length;u++){var h=c[u];i.push({sub:h,by:h+f})}}else{var d=l.substitute;for(u=0;u<c.length;u++)i.push({sub:c[u],by:d[u]})}}return i};Bt.prototype.getMultiple=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,2),a=0;a<r.length;a++)for(var s=r[a].subtables,o=0;o<s.length;o++){var l=s[o],c=this.expandCoverage(l.coverage),u=void 0;for(u=0;u<c.length;u++){var f=c[u],h=l.sequences[u];i.push({sub:f,by:h})}}return i};Bt.prototype.getAlternates=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,3),a=0;a<r.length;a++)for(var s=r[a].subtables,o=0;o<s.length;o++)for(var l=s[o],c=this.expandCoverage(l.coverage),u=l.alternateSets,f=0;f<c.length;f++)i.push({sub:c[f],by:u[f]});return i};Bt.prototype.getLigatures=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,4),a=0;a<r.length;a++)for(var s=r[a].subtables,o=0;o<s.length;o++)for(var l=s[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets,f=0;f<c.length;f++)for(var h=c[f],d=u[f],g=0;g<d.length;g++){var v=d[g];i.push({sub:[h].concat(v.components),by:v.ligGlyph})}return i};Bt.prototype.addSingle=function(n,e,t,i){var r=this.getLookupTables(t,i,n,1,!0)[0],a=Wo(r,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Pe.assert(a.coverage.format===1,"Single: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.substitute.splice(o,0,0)),a.substitute[o]=e.by};Bt.prototype.addMultiple=function(n,e,t,i){Pe.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var r=this.getLookupTables(t,i,n,2,!0)[0],a=Wo(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Pe.assert(a.coverage.format===1,"Multiple: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.sequences.splice(o,0,0)),a.sequences[o]=e.by};Bt.prototype.addAlternate=function(n,e,t,i){var r=this.getLookupTables(t,i,n,3,!0)[0],a=Wo(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Pe.assert(a.coverage.format===1,"Alternate: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.alternateSets.splice(o,0,0)),a.alternateSets[o]=e.by};Bt.prototype.addLigature=function(n,e,t,i){var r=this.getLookupTables(t,i,n,4,!0)[0],a=r.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},r.subtables[0]=a),Pe.assert(a.coverage.format===1,"Ligature: unable to modify coverage table format "+a.coverage.format);var s=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(a.coverage.glyphs,s);if(c>=0){for(var u=a.ligatureSets[c],f=0;f<u.length;f++)if($_(u[f].components,o))return;u.push(l)}else c=-1-c,a.coverage.glyphs.splice(c,0,s),a.ligatureSets.splice(c,0,[l])};Bt.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Bt.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};function pr(n,e){if(!n)throw e}function Qc(n,e,t,i,r){var a;return(e&i)>0?(a=n.parseByte(),e&r||(a=-a),a=t+a):(e&r)>0?a=t:a=t+n.parseShort(),a}function Bh(n,e,t){var i=new Ae.Parser(e,t);n.numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();var r,a;if(n.numberOfContours>0){for(var s=n.endPointIndices=[],o=0;o<n.numberOfContours;o+=1)s.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(var l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());var c=s[s.length-1]+1;r=[];for(var u=0;u<c;u+=1)if(a=i.parseByte(),r.push(a),(a&8)>0)for(var f=i.parseByte(),h=0;h<f;h+=1)r.push(a),u+=1;if(Pe.argument(r.length===c,"Bad flags."),s.length>0){var d=[],g;if(c>0){for(var v=0;v<c;v+=1)a=r[v],g={},g.onCurve=!!(a&1),g.lastPointOfContour=s.indexOf(v)>=0,d.push(g);for(var m=0,p=0;p<c;p+=1)a=r[p],g=d[p],g.x=Qc(i,a,m,2,16),m=g.x;for(var b=0,x=0;x<c;x+=1)a=r[x],g=d[x],g.y=Qc(i,a,b,4,32),b=g.y}n.points=d}else n.points=[]}else if(n.numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];for(var M=!0;M;){r=i.parseUShort();var P={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(r&1)>0?(r&2)>0?(P.dx=i.parseShort(),P.dy=i.parseShort()):P.matchedPoints=[i.parseUShort(),i.parseUShort()]:(r&2)>0?(P.dx=i.parseChar(),P.dy=i.parseChar()):P.matchedPoints=[i.parseByte(),i.parseByte()],(r&8)>0?P.xScale=P.yScale=i.parseF2Dot14():(r&64)>0?(P.xScale=i.parseF2Dot14(),P.yScale=i.parseF2Dot14()):(r&128)>0&&(P.xScale=i.parseF2Dot14(),P.scale01=i.parseF2Dot14(),P.scale10=i.parseF2Dot14(),P.yScale=i.parseF2Dot14()),n.components.push(P),M=!!(r&32)}if(r&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(var w=0;w<n.instructionLength;w+=1)n.instructions.push(i.parseByte())}}}function Xs(n,e){for(var t=[],i=0;i<n.length;i+=1){var r=n[i],a={x:e.xScale*r.x+e.scale01*r.y+e.dx,y:e.scale10*r.x+e.yScale*r.y+e.dy,onCurve:r.onCurve,lastPointOfContour:r.lastPointOfContour};t.push(a)}return t}function j_(n){for(var e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return Pe.argument(t.length===0,"There are still points left in the current contour."),e}function Gh(n){var e=new mt;if(!n)return e;for(var t=j_(n),i=0;i<t.length;++i){var r=t[i],a=null,s=r[r.length-1],o=r[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(s.x+o.x)*.5,y:(s.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<r.length;++c)if(a=s,s=o,o=r[(c+1)%r.length],s.onCurve)e.lineTo(s.x,s.y);else{var u=o;a.onCurve||((s.x+a.x)*.5,(s.y+a.y)*.5),o.onCurve||(u={x:(s.x+o.x)*.5,y:(s.y+o.y)*.5}),e.quadraticCurveTo(s.x,s.y,u.x,u.y)}e.closePath()}return e}function zh(n,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var i=e.components[t],r=n.get(i.glyphIndex);if(r.getPath(),r.points){var a=void 0;if(i.matchedPoints===void 0)a=Xs(r.points,i);else{if(i.matchedPoints[0]>e.points.length-1||i.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[i.matchedPoints[0]],o=r.points[i.matchedPoints[1]],l={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};o=Xs([o],l)[0],l.dx=s.x-o.x,l.dy=s.y-o.y,a=Xs(r.points,l)}e.points=e.points.concat(a)}}return Gh(e.points)}function Q_(n,e,t,i){for(var r=new mn.GlyphSet(i),a=0;a<t.length-1;a+=1){var s=t[a],o=t[a+1];s!==o?r.push(a,mn.ttfGlyphLoader(i,a,Bh,n,e+s,zh)):r.push(a,mn.glyphLoader(i,a))}return r}function ey(n,e,t,i){var r=new mn.GlyphSet(i);return i._push=function(a){var s=t[a],o=t[a+1];s!==o?r.push(a,mn.ttfGlyphLoader(i,a,Bh,n,e+s,zh)):r.push(a,mn.glyphLoader(i,a))},r}function ty(n,e,t,i,r){return r.lowMemory?ey(n,e,t,i):Q_(n,e,t,i)}var Hh={getPath:Gh,parse:ty},Vh,yi,Wh,Eo;function Xh(n){this.font=n,this.getCommands=function(e){return Hh.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function ny(n){return n}function qh(n){return Math.sign(n)*Math.round(Math.abs(n))}function iy(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function ry(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function ay(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function sy(n){return Math.sign(n)*Math.floor(Math.abs(n))}var Yh=function(n){var e=this.srPeriod,t=this.srPhase,i=this.srThreshold,r=1;return n<0&&(n=-n,r=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*r:n*r},pn={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){var r,a,s,o,l,c,u;if(!i||i===this){if(r=n.xo-e.xo,a=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,s=Math.abs(r),o=Math.abs(a),u=s+o,u===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*s)/u;return}if(r=i.distance(n,e,!0,!0),a=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),s=Math.abs(r),o=Math.abs(a),u=s+o,u===0){pn.setRelative(n,n,(l+c)/2,i,!0);return}pn.setRelative(n,n,(l*o+c*s)/u,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,r){if(!i||i===this){n.x=(r?e.xo:e.x)+t;return}var a=r?e.xo:e.x,s=r?e.yo:e.y,o=a+t*i.x,l=s+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},wn={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){var r,a,s,o,l,c,u;if(!i||i===this){if(r=n.yo-e.yo,a=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,s=Math.abs(r),o=Math.abs(a),u=s+o,u===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*s)/u;return}if(r=i.distance(n,e,!0,!0),a=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),s=Math.abs(r),o=Math.abs(a),u=s+o,u===0){wn.setRelative(n,n,(l+c)/2,i,!0);return}wn.setRelative(n,n,(l*o+c*s)/u,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,r){if(!i||i===this){n.y=(r?e.yo:e.y)+t;return}var a=r?e.xo:e.x,s=r?e.yo:e.y,o=a+t*i.x,l=s+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(pn);Object.freeze(wn);function Nr(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}Nr.prototype.distance=function(n,e,t,i){return this.x*pn.distance(n,e,t,i)+this.y*wn.distance(n,e,t,i)};Nr.prototype.interpolate=function(n,e,t,i){var r,a,s,o,l,c,u;if(s=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),r=i.distance(e,e,!1,!0),a=i.distance(t,t,!1,!0),l=Math.abs(s),c=Math.abs(o),u=l+c,u===0){this.setRelative(n,n,(r+a)/2,i,!0);return}this.setRelative(n,n,(r*c+a*l)/u,i,!0)};Nr.prototype.setRelative=function(n,e,t,i,r){i=i||this;var a=r?e.xo:e.x,s=r?e.yo:e.y,o=a+t*i.x,l=s+t*i.y,c=i.normalSlope,u=this.slope,f=n.x,h=n.y;n.x=(u*f-c*o+l-h)/(u-c),n.y=u*(n.x-f)+h};Nr.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function kr(n,e){var t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?pn:n===0&&e===1?wn:new Nr(n,e)}function Cn(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Cn.prototype.nextTouched=function(n){for(var e=this.nextPointOnContour;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Cn.prototype.prevTouched=function(n){for(var e=this.prevPointOnContour;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Pr=Object.freeze(new Cn(0,0)),oy={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Xn(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=pn,this.round=qh}}Xh.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,i=this._prepState;if(!i||i.ppem!==e){var r=this._fpgmState;if(!r){Xn.prototype=oy,r=this._fpgmState=new Xn("fpgm",t.tables.fpgm),r.funcs=[],r.font=t,K.DEBUG&&(console.log("---EXEC FPGM---"),r.step=-1);try{yi(r)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}Xn.prototype=r,i=this._prepState=new Xn("prep",t.tables.prep),i.ppem=e;var a=t.tables.cvt;if(a)for(var s=i.cvt=new Array(a.length),o=e/t.unitsPerEm,l=0;l<a.length;l++)s[l]=a[l]*o;else i.cvt=[];K.DEBUG&&(console.log("---EXEC PREP---"),i.step=-1);try{yi(i)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return Wh(n,i)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};Wh=function(n,e){var t=e.ppem/e.font.unitsPerEm,i=t,r=n.components,a,s,o;if(Xn.prototype=e,!r)o=new Xn("glyf",n.instructions),K.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),Eo(n,o,t,i),s=o.gZone;else{var l=e.font;s=[],a=[];for(var c=0;c<r.length;c++){var u=r[c],f=l.glyphs.get(u.glyphIndex);o=new Xn("glyf",f.instructions),K.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),Eo(f,o,t,i);for(var h=Math.round(u.dx*t),d=Math.round(u.dy*i),g=o.gZone,v=o.contours,m=0;m<g.length;m++){var p=g[m];p.xTouched=p.yTouched=!1,p.xo=p.x=p.x+h,p.yo=p.y=p.y+d}var b=s.length;s.push.apply(s,g);for(var x=0;x<v.length;x++)a.push(v[x]+b)}n.instructions&&!o.inhibitGridFit&&(o=new Xn("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=s,o.contours=a,s.push(new Cn(0,0),new Cn(Math.round(n.advanceWidth*t),0)),K.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),yi(o),s.length-=2)}return s};Eo=function(n,e,t,i){for(var r=n.points||[],a=r.length,s=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<a;c++)l=r[c],s[c]=new Cn(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);for(var u,f,h=0;h<a;h++)l=s[h],u||(u=l,o.push(h)),l.lastPointOfContour?(l.nextPointOnContour=u,u.prevPointOnContour=l,u=void 0):(f=s[h+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!e.inhibitGridFit){if(K.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var d=0;d<a;d++)console.log(d,s[d].x,s[d].y)}if(s.push(new Cn(0,0),new Cn(Math.round(n.advanceWidth*t),0)),yi(e),s.length-=2,K.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var g=0;g<a;g++)console.log(g,s[g].x,s[g].y)}}};yi=function(n){var e=n.prog;if(e){var t=e.length,i;for(n.ip=0;n.ip<t;n.ip++){if(K.DEBUG&&n.step++,i=Vh[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}}};function ja(n){for(var e=n.tZone=new Array(n.gZone.length),t=0;t<e.length;t++)e[t]=new Cn(0,0)}function Zh(n,e){var t=n.prog,i=n.ip,r=1,a;do if(a=t[++i],a===88)r++;else if(a===89)r--;else if(a===64)i+=t[i+1]+1;else if(a===65)i+=2*t[i+1]+1;else if(a>=176&&a<=183)i+=a-176+1;else if(a>=184&&a<=191)i+=(a-184+1)*2;else if(e&&r===1&&a===27)break;while(r>0);n.ip=i}function eu(n,e){K.DEBUG&&console.log(e.step,"SVTCA["+n.axis+"]"),e.fv=e.pv=e.dpv=n}function tu(n,e){K.DEBUG&&console.log(e.step,"SPVTCA["+n.axis+"]"),e.pv=e.dpv=n}function nu(n,e){K.DEBUG&&console.log(e.step,"SFVTCA["+n.axis+"]"),e.fv=n}function iu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),a=e.z2[i],s=e.z1[r];K.DEBUG&&console.log("SPVTL["+n+"]",i,r);var o,l;n?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.pv=e.dpv=kr(o,l)}function ru(n,e){var t=e.stack,i=t.pop(),r=t.pop(),a=e.z2[i],s=e.z1[r];K.DEBUG&&console.log("SFVTL["+n+"]",i,r);var o,l;n?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.fv=kr(o,l)}function ly(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.pv=n.dpv=kr(i,t)}function cy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.fv=kr(i,t)}function uy(n){var e=n.stack,t=n.pv;K.DEBUG&&console.log(n.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function hy(n){var e=n.stack,t=n.fv;K.DEBUG&&console.log(n.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function fy(n){n.fv=n.pv,K.DEBUG&&console.log(n.step,"SFVTPV[]")}function dy(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop(),a=e.pop(),s=e.pop(),o=n.z0,l=n.z1,c=o[t],u=o[i],f=l[r],h=l[a],d=n.z2[s];K.DEBUG&&console.log("ISECT[], ",t,i,r,a,s);var g=c.x,v=c.y,m=u.x,p=u.y,b=f.x,x=f.y,M=h.x,P=h.y,w=(g-m)*(x-P)-(v-p)*(b-M),T=g*p-v*m,C=b*P-x*M;d.x=(T*(b-M)-C*(g-m))/w,d.y=(T*(x-P)-C*(v-p))/w}function py(n){n.rp0=n.stack.pop(),K.DEBUG&&console.log(n.step,"SRP0[]",n.rp0)}function my(n){n.rp1=n.stack.pop(),K.DEBUG&&console.log(n.step,"SRP1[]",n.rp1)}function gy(n){n.rp2=n.stack.pop(),K.DEBUG&&console.log(n.step,"SRP2[]",n.rp2)}function vy(n){var e=n.stack.pop();switch(K.DEBUG&&console.log(n.step,"SZP0[]",e),n.zp0=e,e){case 0:n.tZone||ja(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function xy(n){var e=n.stack.pop();switch(K.DEBUG&&console.log(n.step,"SZP1[]",e),n.zp1=e,e){case 0:n.tZone||ja(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function _y(n){var e=n.stack.pop();switch(K.DEBUG&&console.log(n.step,"SZP2[]",e),n.zp2=e,e){case 0:n.tZone||ja(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function yy(n){var e=n.stack.pop();switch(K.DEBUG&&console.log(n.step,"SZPS[]",e),n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||ja(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function Sy(n){n.loop=n.stack.pop(),K.DEBUG&&console.log(n.step,"SLOOP[]",n.loop)}function My(n){K.DEBUG&&console.log(n.step,"RTG[]"),n.round=qh}function by(n){K.DEBUG&&console.log(n.step,"RTHG[]"),n.round=ry}function Ey(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"SMD[]",e),n.minDis=e/64}function Ty(n){K.DEBUG&&console.log(n.step,"ELSE[]"),Zh(n,!1)}function Ay(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"JMPR[]",e),n.ip+=e-1}function wy(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"SCVTCI[]",e),n.cvCutIn=e/64}function Cy(n){var e=n.stack;K.DEBUG&&console.log(n.step,"DUP[]"),e.push(e[e.length-1])}function qs(n){K.DEBUG&&console.log(n.step,"POP[]"),n.stack.pop()}function Ry(n){K.DEBUG&&console.log(n.step,"CLEAR[]"),n.stack.length=0}function Ly(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"SWAP[]"),e.push(t),e.push(i)}function Py(n){var e=n.stack;K.DEBUG&&console.log(n.step,"DEPTH[]"),e.push(e.length)}function Uy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"LOOPCALL[]",t,i);var r=n.ip,a=n.prog;n.prog=n.funcs[t];for(var s=0;s<i;s++)yi(n),K.DEBUG&&console.log(++n.step,s+1<i?"next loopcall":"done loopcall",s);n.ip=r,n.prog=a}function Dy(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"CALL[]",e);var t=n.ip,i=n.prog;n.prog=n.funcs[e],yi(n),n.ip=t,n.prog=i,K.DEBUG&&console.log(++n.step,"returning from",e)}function Fy(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"CINDEX[]",t),e.push(e[e.length-t])}function Iy(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function Oy(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");var e=n.stack,t=n.prog,i=n.ip,r=e.pop(),a=i;for(K.DEBUG&&console.log(n.step,"FDEF[]",r);t[++i]!==45;);n.ip=i,n.funcs[r]=t.slice(a+1,i)}function au(n,e){var t=e.stack.pop(),i=e.z0[t],r=e.fv,a=e.pv;K.DEBUG&&console.log(e.step,"MDAP["+n+"]",t);var s=a.distance(i,Pr);n&&(s=e.round(s)),r.setRelative(i,Pr,s,a),r.touch(i),e.rp0=e.rp1=t}function su(n,e){var t=e.z2,i=t.length-2,r,a,s;K.DEBUG&&console.log(e.step,"IUP["+n.axis+"]");for(var o=0;o<i;o++)r=t[o],!n.touched(r)&&(a=r.prevTouched(n),a!==r&&(s=r.nextTouched(n),a===s&&n.setRelative(r,r,n.distance(a,a,!1,!0),n,!0),n.interpolate(r,a,s,n)))}function ou(n,e){for(var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],a=e.fv,s=e.pv,o=e.loop,l=e.z2;o--;){var c=t.pop(),u=l[c],f=s.distance(r,r,!1,!0);a.setRelative(u,u,f,s),a.touch(u),K.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(n?"rp1":"rp2")+"]",c)}e.loop=1}function lu(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],a=e.fv,s=e.pv,o=t.pop(),l=e.z2[e.contours[o]],c=l;K.DEBUG&&console.log(e.step,"SHC["+n+"]",o);var u=s.distance(r,r,!1,!0);do c!==r&&a.setRelative(c,c,u,s),c=c.nextPointOnContour;while(c!==l)}function cu(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],a=e.fv,s=e.pv,o=t.pop();K.DEBUG&&console.log(e.step,"SHZ["+n+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,u=s.distance(r,r,!1,!0),f=l.length-2,h=0;h<f;h++)c=l[h],a.setRelative(c,c,u,s)}function Ny(n){for(var e=n.stack,t=n.loop,i=n.fv,r=e.pop()/64,a=n.z2;t--;){var s=e.pop(),o=a[s];K.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-t)+": ":"")+"SHPIX[]",s,r),i.setRelative(o,o,r),i.touch(o)}n.loop=1}function ky(n){for(var e=n.stack,t=n.rp1,i=n.rp2,r=n.loop,a=n.z0[t],s=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;r--;){var u=e.pop(),f=c[u];K.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"IP[]",u,t,"<->",i),o.interpolate(f,a,s,l),o.touch(f)}n.loop=1}function uu(n,e){var t=e.stack,i=t.pop()/64,r=t.pop(),a=e.z1[r],s=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(a,s,i,l),o.touch(a),K.DEBUG&&console.log(e.step,"MSIRP["+n+"]",i,r),e.rp1=e.rp0,e.rp2=r,n&&(e.rp0=r)}function By(n){for(var e=n.stack,t=n.rp0,i=n.z0[t],r=n.loop,a=n.fv,s=n.pv,o=n.z1;r--;){var l=e.pop(),c=o[l];K.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"ALIGNRP[]",l),a.setRelative(c,i,0,s),a.touch(c)}n.loop=1}function Gy(n){K.DEBUG&&console.log(n.step,"RTDG[]"),n.round=iy}function hu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),a=e.z0[r],s=e.fv,o=e.pv,l=e.cvt[i];K.DEBUG&&console.log(e.step,"MIAP["+n+"]",i,"(",l,")",r);var c=o.distance(a,Pr);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),s.setRelative(a,Pr,c,o),e.zp0===0&&(a.xo=a.x,a.yo=a.y),s.touch(a),e.rp0=e.rp1=r}function zy(n){var e=n.prog,t=n.ip,i=n.stack,r=e[++t];K.DEBUG&&console.log(n.step,"NPUSHB[]",r);for(var a=0;a<r;a++)i.push(e[++t]);n.ip=t}function Hy(n){var e=n.ip,t=n.prog,i=n.stack,r=t[++e];K.DEBUG&&console.log(n.step,"NPUSHW[]",r);for(var a=0;a<r;a++){var s=t[++e]<<8|t[++e];s&32768&&(s=-((s^65535)+1)),i.push(s)}n.ip=e}function Vy(n){var e=n.stack,t=n.store;t||(t=n.store=[]);var i=e.pop(),r=e.pop();K.DEBUG&&console.log(n.step,"WS",i,r),t[r]=i}function Wy(n){var e=n.stack,t=n.store,i=e.pop();K.DEBUG&&console.log(n.step,"RS",i);var r=t&&t[i]||0;e.push(r)}function Xy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"WCVTP",t,i),n.cvt[i]=t/64}function qy(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"RCVT",t),e.push(n.cvt[t]*64)}function fu(n,e){var t=e.stack,i=t.pop(),r=e.z2[i];K.DEBUG&&console.log(e.step,"GC["+n+"]",i),t.push(e.dpv.distance(r,Pr,n,!1)*64)}function du(n,e){var t=e.stack,i=t.pop(),r=t.pop(),a=e.z1[i],s=e.z0[r],o=e.dpv.distance(s,a,n,n);K.DEBUG&&console.log(e.step,"MD["+n+"]",i,r,"->",o),e.stack.push(Math.round(o*64))}function Yy(n){K.DEBUG&&console.log(n.step,"MPPEM[]"),n.stack.push(n.ppem)}function Zy(n){K.DEBUG&&console.log(n.step,"FLIPON[]"),n.autoFlip=!0}function Ky(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"LT[]",t,i),e.push(i<t?1:0)}function Jy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"LTEQ[]",t,i),e.push(i<=t?1:0)}function $y(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"GT[]",t,i),e.push(i>t?1:0)}function jy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"GTEQ[]",t,i),e.push(i>=t?1:0)}function Qy(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"EQ[]",t,i),e.push(t===i?1:0)}function eS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"NEQ[]",t,i),e.push(t!==i?1:0)}function tS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function nS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function iS(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"IF[]",e),e||(Zh(n,!0),K.DEBUG&&console.log(n.step,"EIF[]"))}function rS(n){K.DEBUG&&console.log(n.step,"EIF[]")}function aS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"AND[]",t,i),e.push(t&&i?1:0)}function sS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"OR[]",t,i),e.push(t||i?1:0)}function oS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"NOT[]",t),e.push(t?0:1)}function Ys(n,e){var t=e.stack,i=t.pop(),r=e.fv,a=e.pv,s=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;K.DEBUG&&console.log(e.step,"DELTAP["+n+"]",i,t);for(var u=0;u<i;u++){var f=t.pop(),h=t.pop(),d=o+((h&240)>>4);if(d===s){var g=(h&15)-8;g>=0&&g++,K.DEBUG&&console.log(e.step,"DELTAPFIX",f,"by",g*l);var v=c[f];r.setRelative(v,v,g*l,a)}}}function lS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"SDB[]",t),n.deltaBase=t}function cS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"SDS[]",t),n.deltaShift=Math.pow(.5,t)}function uS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"ADD[]",t,i),e.push(i+t)}function hS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"SUB[]",t,i),e.push(i-t)}function fS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"DIV[]",t,i),e.push(i*64/t)}function dS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"MUL[]",t,i),e.push(i*t/64)}function pS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"ABS[]",t),e.push(Math.abs(t))}function mS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"NEG[]",t),e.push(-t)}function gS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function vS(n){var e=n.stack,t=e.pop();K.DEBUG&&console.log(n.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function ba(n,e){var t=e.stack,i=t.pop();K.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(i/64)*64)}function xS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"WCVTF[]",t,i),n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function Zs(n,e){var t=e.stack,i=t.pop(),r=e.ppem,a=e.deltaBase+(n-1)*16,s=e.deltaShift;K.DEBUG&&console.log(e.step,"DELTAC["+n+"]",i,t);for(var o=0;o<i;o++){var l=t.pop(),c=t.pop(),u=a+((c&240)>>4);if(u===r){var f=(c&15)-8;f>=0&&f++;var h=f*s;K.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",h),e.cvt[l]+=h}}}function _S(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"SROUND[]",e),n.round=Yh;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function yS(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"S45ROUND[]",e),n.round=Yh;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function SS(n){K.DEBUG&&console.log(n.step,"ROFF[]"),n.round=ny}function MS(n){K.DEBUG&&console.log(n.step,"RUTG[]"),n.round=ay}function bS(n){K.DEBUG&&console.log(n.step,"RDTG[]"),n.round=sy}function ES(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"SCANCTRL[]",e)}function pu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),a=e.z2[i],s=e.z1[r];K.DEBUG&&console.log(e.step,"SDPVTL["+n+"]",i,r);var o,l;n?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.dpv=kr(o,l)}function TS(n){var e=n.stack,t=e.pop(),i=0;K.DEBUG&&console.log(n.step,"GETINFO[]",t),t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function AS(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop();K.DEBUG&&console.log(n.step,"ROLL[]"),e.push(i),e.push(t),e.push(r)}function wS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"MAX[]",t,i),e.push(Math.max(i,t))}function CS(n){var e=n.stack,t=e.pop(),i=e.pop();K.DEBUG&&console.log(n.step,"MIN[]",t,i),e.push(Math.min(i,t))}function RS(n){var e=n.stack.pop();K.DEBUG&&console.log(n.step,"SCANTYPE[]",e)}function LS(n){var e=n.stack.pop(),t=n.stack.pop();switch(K.DEBUG&&console.log(n.step,"INSTCTRL[]",e,t),e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Nn(n,e){var t=e.stack,i=e.prog,r=e.ip;K.DEBUG&&console.log(e.step,"PUSHB["+n+"]");for(var a=0;a<n;a++)t.push(i[++r]);e.ip=r}function kn(n,e){var t=e.ip,i=e.prog,r=e.stack;K.DEBUG&&console.log(e.ip,"PUSHW["+n+"]");for(var a=0;a<n;a++){var s=i[++t]<<8|i[++t];s&32768&&(s=-((s^65535)+1)),r.push(s)}e.ip=t}function Te(n,e,t,i,r,a){var s=a.stack,o=n&&s.pop(),l=s.pop(),c=a.rp0,u=a.z0[c],f=a.z1[l],h=a.minDis,d=a.fv,g=a.dpv,v,m,p,b;m=v=g.distance(f,u,!0,!0),p=m>=0?1:-1,m=Math.abs(m),n&&(b=a.cvt[o],i&&Math.abs(m-b)<a.cvCutIn&&(m=b)),t&&m<h&&(m=h),i&&(m=a.round(m)),d.setRelative(f,u,p*m,g),d.touch(f),K.DEBUG&&console.log(a.step,(n?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(i?"R":"_")+(r===0?"Gr":r===1?"Bl":r===2?"Wh":"")+"]",n?o+"("+a.cvt[o]+","+b+")":"",l,"(d =",v,"->",p*m,")"),a.rp1=a.rp0,a.rp2=l,e&&(a.rp0=l)}Vh=[eu.bind(void 0,wn),eu.bind(void 0,pn),tu.bind(void 0,wn),tu.bind(void 0,pn),nu.bind(void 0,wn),nu.bind(void 0,pn),iu.bind(void 0,0),iu.bind(void 0,1),ru.bind(void 0,0),ru.bind(void 0,1),ly,cy,uy,hy,fy,dy,py,my,gy,vy,xy,_y,yy,Sy,My,by,Ey,Ty,Ay,wy,void 0,void 0,Cy,qs,Ry,Ly,Py,Fy,Iy,void 0,void 0,void 0,Uy,Dy,Oy,void 0,au.bind(void 0,0),au.bind(void 0,1),su.bind(void 0,wn),su.bind(void 0,pn),ou.bind(void 0,0),ou.bind(void 0,1),lu.bind(void 0,0),lu.bind(void 0,1),cu.bind(void 0,0),cu.bind(void 0,1),Ny,ky,uu.bind(void 0,0),uu.bind(void 0,1),By,Gy,hu.bind(void 0,0),hu.bind(void 0,1),zy,Hy,Vy,Wy,Xy,qy,fu.bind(void 0,0),fu.bind(void 0,1),void 0,du.bind(void 0,0),du.bind(void 0,1),Yy,void 0,Zy,void 0,void 0,Ky,Jy,$y,jy,Qy,eS,tS,nS,iS,rS,aS,sS,oS,Ys.bind(void 0,1),lS,cS,uS,hS,fS,dS,pS,mS,gS,vS,ba.bind(void 0,0),ba.bind(void 0,1),ba.bind(void 0,2),ba.bind(void 0,3),void 0,void 0,void 0,void 0,xS,Ys.bind(void 0,2),Ys.bind(void 0,3),Zs.bind(void 0,1),Zs.bind(void 0,2),Zs.bind(void 0,3),_S,yS,void 0,void 0,SS,void 0,MS,bS,qs,qs,void 0,void 0,void 0,void 0,void 0,ES,pu.bind(void 0,0),pu.bind(void 0,1),TS,void 0,AS,wS,CS,RS,LS,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Nn.bind(void 0,1),Nn.bind(void 0,2),Nn.bind(void 0,3),Nn.bind(void 0,4),Nn.bind(void 0,5),Nn.bind(void 0,6),Nn.bind(void 0,7),Nn.bind(void 0,8),kn.bind(void 0,1),kn.bind(void 0,2),kn.bind(void 0,3),kn.bind(void 0,4),kn.bind(void 0,5),kn.bind(void 0,6),kn.bind(void 0,7),kn.bind(void 0,8),Te.bind(void 0,0,0,0,0,0),Te.bind(void 0,0,0,0,0,1),Te.bind(void 0,0,0,0,0,2),Te.bind(void 0,0,0,0,0,3),Te.bind(void 0,0,0,0,1,0),Te.bind(void 0,0,0,0,1,1),Te.bind(void 0,0,0,0,1,2),Te.bind(void 0,0,0,0,1,3),Te.bind(void 0,0,0,1,0,0),Te.bind(void 0,0,0,1,0,1),Te.bind(void 0,0,0,1,0,2),Te.bind(void 0,0,0,1,0,3),Te.bind(void 0,0,0,1,1,0),Te.bind(void 0,0,0,1,1,1),Te.bind(void 0,0,0,1,1,2),Te.bind(void 0,0,0,1,1,3),Te.bind(void 0,0,1,0,0,0),Te.bind(void 0,0,1,0,0,1),Te.bind(void 0,0,1,0,0,2),Te.bind(void 0,0,1,0,0,3),Te.bind(void 0,0,1,0,1,0),Te.bind(void 0,0,1,0,1,1),Te.bind(void 0,0,1,0,1,2),Te.bind(void 0,0,1,0,1,3),Te.bind(void 0,0,1,1,0,0),Te.bind(void 0,0,1,1,0,1),Te.bind(void 0,0,1,1,0,2),Te.bind(void 0,0,1,1,0,3),Te.bind(void 0,0,1,1,1,0),Te.bind(void 0,0,1,1,1,1),Te.bind(void 0,0,1,1,1,2),Te.bind(void 0,0,1,1,1,3),Te.bind(void 0,1,0,0,0,0),Te.bind(void 0,1,0,0,0,1),Te.bind(void 0,1,0,0,0,2),Te.bind(void 0,1,0,0,0,3),Te.bind(void 0,1,0,0,1,0),Te.bind(void 0,1,0,0,1,1),Te.bind(void 0,1,0,0,1,2),Te.bind(void 0,1,0,0,1,3),Te.bind(void 0,1,0,1,0,0),Te.bind(void 0,1,0,1,0,1),Te.bind(void 0,1,0,1,0,2),Te.bind(void 0,1,0,1,0,3),Te.bind(void 0,1,0,1,1,0),Te.bind(void 0,1,0,1,1,1),Te.bind(void 0,1,0,1,1,2),Te.bind(void 0,1,0,1,1,3),Te.bind(void 0,1,1,0,0,0),Te.bind(void 0,1,1,0,0,1),Te.bind(void 0,1,1,0,0,2),Te.bind(void 0,1,1,0,0,3),Te.bind(void 0,1,1,0,1,0),Te.bind(void 0,1,1,0,1,1),Te.bind(void 0,1,1,0,1,2),Te.bind(void 0,1,1,0,1,3),Te.bind(void 0,1,1,1,0,0),Te.bind(void 0,1,1,1,0,1),Te.bind(void 0,1,1,1,0,2),Te.bind(void 0,1,1,1,0,3),Te.bind(void 0,1,1,1,1,0),Te.bind(void 0,1,1,1,1,1),Te.bind(void 0,1,1,1,1,2),Te.bind(void 0,1,1,1,1,3)];function or(n){this.char=n,this.state={},this.activeState=null}function Xo(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function PS(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function nn(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function Qa(n){this.eventId=n,this.subscribers=[]}function US(n){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(r){Object.defineProperty(e.events,r,{value:new Qa(r)})}),n&&t.forEach(function(r){var a=n[r];typeof a=="function"&&e.events[r].subscribe(a)});var i=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];i.forEach(function(r){e.events[r].subscribe(e.updateContextsRanges)})}function ht(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],US.call(this,n)}or.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};or.prototype.getState=function(n){return this.state[n]||null};ht.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};ht.prototype.composeRUD=function(n){var e=this,t=!0,i=n.map(function(a){return e[a[0]].apply(e,a.slice(1).concat(t))}),r=function(a){return typeof a=="object"&&a.hasOwnProperty("FAIL")};if(i.every(r))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:i.filter(r)};this.dispatch("composeRUD",[i.filter(function(a){return!r(a)})])};ht.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;var r=t.every(function(s){return s instanceof or});if(!isNaN(n)&&this.inboundIndex(n)&&r){var a=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[a,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};ht.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof or){var i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};ht.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;var i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};ht.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){var t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};ht.prototype.insertToken=function(n,e,t){var i=n.every(function(r){return r instanceof or});return i?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};ht.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,r){var a=[i,r],s=e===null||e.apply(this,a)===!0,o=[i,r];if(s){var l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};Qa.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};Qa.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};nn.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};nn.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};ht.prototype.rangeToText=function(n){if(n instanceof Xo)return this.getRangeTokens(n).map(function(e){return e.char}).join("")};ht.prototype.getText=function(){return this.tokens.map(function(n){return n.char}).join("")};ht.prototype.getContext=function(n){var e=this.registeredContexts[n];return e||null};ht.prototype.on=function(n,e){var t=this.events[n];return t?t.subscribe(e):null};ht.prototype.dispatch=function(n,e){var t=this,i=this.events[n];i instanceof Qa&&i.subscribers.forEach(function(r){r.apply(t,e||[])})};ht.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:"context name '"+n+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var i=new PS(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};ht.prototype.getRangeTokens=function(n){var e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};ht.prototype.getContextRanges=function(n){var e=this.getContext(n);return e?e.ranges:{FAIL:"context checker '"+n+"' is not registered."}};ht.prototype.resetContextsRanges=function(){var n=this.registeredContexts;for(var e in n)if(n.hasOwnProperty(e)){var t=n[e];t.ranges=[]}};ht.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var n=this.tokens.map(function(i){return i.char}),e=0;e<n.length;e++){var t=new nn(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};ht.prototype.setEndOffset=function(n,e){var t=this.getContext(e).openRange.startIndex,i=new Xo(t,n,e),r=this.getContext(e).ranges;return i.rangeId=e+"."+r.length,r.push(i),this.getContext(e).openRange=null,i};ht.prototype.runContextCheck=function(n){var e=this,t=n.index;this.contextCheckers.forEach(function(i){var r=i.contextName,a=e.getContext(r).openRange;if(!a&&i.checkStart(n)&&(a=new Xo(t,null,r),e.getContext(r).openRange=a,e.dispatch("contextStart",[r,t])),a&&i.checkEnd(n)){var s=t-a.startIndex+1,o=e.setEndOffset(s,r);e.dispatch("contextEnd",[r,o])}})};ht.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();var e=Array.from(n);this.dispatch("start");for(var t=0;t<e.length;t++){var i=e[t],r=new nn(e,t);this.dispatch("next",[r]),this.runContextCheck(r);var a=new or(i);this.tokens.push(a),this.dispatch("newToken",[a,r])}return this.dispatch("end",[this.tokens]),this.tokens};function Zn(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function Kh(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function jn(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function Ca(n){return/[A-z]/.test(n)}function DS(n){return/\s/.test(n)}function Gt(n){this.font=n,this.features={}}function mi(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function Br(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:for(var t=e.ranges,i=0;i<t.length;i++){var r=t[i];if(n>=r.start&&n<=r.end){var a=n-r.start;return r.index+a}}break;default:return-1}return-1}function FS(n,e){var t=Br(n,e.coverage);return t===-1?null:n+e.deltaGlyphId}function IS(n,e){var t=Br(n,e.coverage);return t===-1?null:e.substitute[t]}function Ks(n,e){for(var t=[],i=0;i<n.length;i++){var r=n[i],a=e.current;a=Array.isArray(a)?a[0]:a;var s=Br(a,r);s!==-1&&t.push(s)}return t.length!==n.length?-1:t}function OS(n,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];var i=Ks(e.inputCoverage,n);if(i===-1)return[];var r=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];for(var a=n.lookahead.slice(r);a.length&&jn(a[0].char);)a.shift();var s=new nn(a,0),o=Ks(e.lookaheadCoverage,s),l=[].concat(n.backtrack);for(l.reverse();l.length&&jn(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new nn(l,0),u=Ks(e.backtrackCoverage,c),f=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length,h=[];if(f)for(var d=0;d<e.lookupRecords.length;d++)for(var g=e.lookupRecords[d],v=g.lookupListIndex,m=this.getLookupByIndex(v),p=0;p<m.subtables.length;p++){var b=m.subtables[p],x=this.getLookupMethod(m,b),M=this.getSubstitutionType(m,b);if(M==="12")for(var P=0;P<i.length;P++){var w=n.get(P),T=x(w);T&&h.push(T)}}return h}function NS(n,e){var t=n.current,i=Br(t,e.coverage);if(i===-1)return null;for(var r,a=e.ligatureSets[i],s=0;s<a.length;s++){r=a[s];for(var o=0;o<r.components.length;o++){var l=n.lookahead[o],c=r.components[o];if(l!==c)break;if(o===r.components.length-1)return r}}return null}function kS(n,e){var t=Br(n,e.coverage);return t===-1?null:e.sequences[t]}Gt.prototype.getDefaultScriptFeaturesIndexes=function(){for(var n=this.font.tables.gsub.scripts,e=0;e<n.length;e++){var t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};Gt.prototype.getScriptFeaturesIndexes=function(n){var e=this.font.tables;if(!e.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,i=0;i<t.length;i++){var r=t[i];if(r.tag===n&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var a=r.langSysRecords;if(a)for(var s=0;s<a.length;s++){var o=a[s];if(o.tag===n){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Gt.prototype.mapTagsToFeatures=function(n,e){for(var t={},i=0;i<n.length;i++){var r=n[i].tag,a=n[i].feature;t[r]=a}this.features[e].tags=t};Gt.prototype.getScriptFeatures=function(n){var e=this.features[n];if(this.features.hasOwnProperty(n))return e;var t=this.getScriptFeaturesIndexes(n);if(!t)return null;var i=this.font.tables.gsub;return e=t.map(function(r){return i.features[r]}),this.features[n]=e,this.mapTagsToFeatures(e,n),e};Gt.prototype.getSubstitutionType=function(n,e){var t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};Gt.prototype.getLookupMethod=function(n,e){var t=this,i=this.getSubstitutionType(n,e);switch(i){case"11":return function(r){return FS.apply(t,[r,e])};case"12":return function(r){return IS.apply(t,[r,e])};case"63":return function(r){return OS.apply(t,[r,e])};case"41":return function(r){return NS.apply(t,[r,e])};case"21":return function(r){return kS.apply(t,[r,e])};default:throw new Error("lookupType: "+n.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};Gt.prototype.lookupFeature=function(n){var e=n.contextParams,t=e.index,i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+n.tag+"' for script '"+n.script+"'.");for(var r=this.getFeatureLookups(i),a=[].concat(e.context),s=0;s<r.length;s++)for(var o=r[s],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var u=l[c],f=this.getSubstitutionType(o,u),h=this.getLookupMethod(o,u),d=void 0;switch(f){case"11":d=h(e.current),d&&a.splice(t,1,new mi({id:11,tag:n.tag,substitution:d}));break;case"12":d=h(e.current),d&&a.splice(t,1,new mi({id:12,tag:n.tag,substitution:d}));break;case"63":d=h(e),Array.isArray(d)&&d.length&&a.splice(t,1,new mi({id:63,tag:n.tag,substitution:d}));break;case"41":d=h(e),d&&a.splice(t,1,new mi({id:41,tag:n.tag,substitution:d}));break;case"21":d=h(e.current),d&&a.splice(t,1,new mi({id:21,tag:n.tag,substitution:d}));break}e=new nn(a,t),!(Array.isArray(d)&&!d.length)&&(d=null)}return a.length?a:null};Gt.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);var e=this.features.hasOwnProperty(n.script);if(!n.tag)return e;var t=this.features[n.script].some(function(i){return i.tag===n.tag});return e&&t};Gt.prototype.getLookupSubtables=function(n){return n.subtables||null};Gt.prototype.getLookupByIndex=function(n){var e=this.font.tables.gsub.lookups;return e[n]||null};Gt.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Gt.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function BS(n){var e=n.current,t=n.get(-1);return t===null&&Zn(e)||!Zn(t)&&Zn(e)}function GS(n){var e=n.get(1);return e===null||!Zn(e)}var zS={startCheck:BS,endCheck:GS};function HS(n){var e=n.current,t=n.get(-1);return(Zn(e)||jn(e))&&!Zn(t)}function VS(n){var e=n.get(1);switch(!0){case e===null:return!0;case(!Zn(e)&&!jn(e)):var t=DS(e);if(!t)return!0;if(t){var i=!1;if(i=n.lookahead.some(function(r){return Zn(r)||jn(r)}),!i)return!0}break;default:return!1}}var WS={startCheck:HS,endCheck:VS};function XS(n,e,t){e[t].setState(n.tag,n.substitution)}function qS(n,e,t){e[t].setState(n.tag,n.substitution)}function YS(n,e,t){n.substitution.forEach(function(i,r){var a=e[t+r];a.setState(n.tag,i)})}function ZS(n,e,t){var i=e[t];i.setState(n.tag,n.substitution.ligGlyph);for(var r=n.substitution.components.length,a=0;a<r;a++)i=e[t+a+1],i.setState("deleted",!0)}var mu={11:XS,12:qS,63:YS,41:ZS};function qo(n,e,t){n instanceof mi&&mu[n.id]&&mu[n.id](n,e,t)}function KS(n){for(var e=[].concat(n.backtrack),t=e.length-1;t>=0;t--){var i=e[t],r=Kh(i),a=jn(i);if(!r&&!a)return!0;if(r)return!1}return!1}function JS(n){if(Kh(n.current))return!1;for(var e=0;e<n.lookahead.length;e++){var t=n.lookahead[e],i=jn(t);if(!i)return!0}return!1}function $S(n){var e=this,t="arab",i=this.featuresTags[t],r=this.tokenizer.getRangeTokens(n);if(r.length!==1){var a=new nn(r.map(function(o){return o.getState("glyphIndex")}),0),s=new nn(r.map(function(o){return o.char}),0);r.forEach(function(o,l){if(!jn(o.char)){a.setCurrentIndex(l),s.setCurrentIndex(l);var c=0;KS(s)&&(c|=1),JS(s)&&(c|=2);var u;switch(c){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(i.indexOf(u)!==-1){var f=e.query.lookupFeature({tag:u,script:t,contextParams:a});if(f instanceof Error)return console.info(f.message);f.forEach(function(h,d){h instanceof mi&&(qo(h,r,d),a.context[d]=h.substitution)})}}})}}function gu(n,e){var t=n.map(function(i){return i.activeState.value});return new nn(t,0)}function jS(n){var e=this,t="arab",i=this.tokenizer.getRangeTokens(n),r=gu(i);r.context.forEach(function(a,s){r.setCurrentIndex(s);var o=e.query.lookupFeature({tag:"rlig",script:t,contextParams:r});o.length&&(o.forEach(function(l){return qo(l,i,s)}),r=gu(i))})}function QS(n){var e=n.current,t=n.get(-1);return t===null&&Ca(e)||!Ca(t)&&Ca(e)}function eM(n){var e=n.get(1);return e===null||!Ca(e)}var tM={startCheck:QS,endCheck:eM};function vu(n,e){var t=n.map(function(i){return i.activeState.value});return new nn(t,0)}function nM(n){var e=this,t="latn",i=this.tokenizer.getRangeTokens(n),r=vu(i);r.context.forEach(function(a,s){r.setCurrentIndex(s);var o=e.query.lookupFeature({tag:"liga",script:t,contextParams:r});o.length&&(o.forEach(function(l){return qo(l,i,s)}),r=vu(i))})}function sn(n){this.baseDir=n||"ltr",this.tokenizer=new ht,this.featuresTags={}}sn.prototype.setText=function(n){this.text=n};sn.prototype.contextChecks={latinWordCheck:tM,arabicWordCheck:zS,arabicSentenceCheck:WS};function Js(n){var e=this.contextChecks[n+"Check"];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function iM(){return Js.call(this,"latinWord"),Js.call(this,"arabicWord"),Js.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function rM(){var n=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var i=n.tokenizer.getRangeTokens(t);n.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())})}sn.prototype.registerFeatures=function(n,e){var t=this,i=e.filter(function(r){return t.query.supports({script:n,tag:r})});this.featuresTags.hasOwnProperty(n)?this.featuresTags[n]=this.featuresTags[n].concat(i):this.featuresTags[n]=i};sn.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new Gt(n));for(var t=0;t<e.length;t++){var i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};sn.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Yo(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function aM(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Yo.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(i){$S.call(n,i)})}}function sM(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){Yo.call(this);var i=this.tokenizer.getContextRanges("arabicWord");i.forEach(function(r){jS.call(n,r)})}}}function oM(){var n=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){Yo.call(this);var i=this.tokenizer.getContextRanges("latinWord");i.forEach(function(r){nM.call(n,r)})}}}sn.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};sn.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(aM.call(this),sM.call(this)),this.checkContextReady("latinWord")&&oM.call(this),this.checkContextReady("arabicSentence")&&rM.call(this)};sn.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),iM.call(this),this.applyFeaturesToContexts())};sn.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};sn.prototype.getTextGlyphs=function(n){this.processText(n);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var i=this.tokenizer.tokens[t];if(!i.state.deleted){var r=i.activeState.value;e.push(Array.isArray(r)?r[0]:r)}}return e};function rt(n){n=n||{},n.tables=n.tables||{},n.empty||(pr(n.familyName,"When creating a new Font object, familyName is required."),pr(n.styleName,"When creating a new Font object, styleName is required."),pr(n.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),pr(n.ascender,"When creating a new Font object, ascender is required."),pr(n.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}},this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,fsSelection:n.fsSelection||this.fsSelectionValues.REGULAR},n.tables.os2)})),this.supported=!0,this.glyphs=new mn.GlyphSet(this,n.glyphs||[]),this.encoding=new fh(this),this.position=new Or(this),this.substitution=new Bt(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Xh(this)}})}rt.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)!==null};rt.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};rt.prototype.charToGlyph=function(n){var e=this.charToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};rt.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return n[t]})}:e})};rt.prototype.stringToGlyphs=function(n,e){var t=this,i=new sn,r=function(f){return t.charToGlyphIndex(f.char)};i.registerModifier("glyphIndex",null,r);var a=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;i.applyFeatures(this,a);for(var s=i.getTextGlyphs(n),o=s.length,l=new Array(o),c=this.glyphs.get(0),u=0;u<o;u+=1)l[u]=this.glyphs.get(s[u])||c;return l};rt.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};rt.prototype.nameToGlyph=function(n){var e=this.nameToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};rt.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};rt.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};rt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};rt.prototype.forEachGlyph=function(n,e,t,i,r,a){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,r=Object.assign({},this.defaultRenderOptions,r);var s=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,r),l;if(r.kerning){var c=r.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,r.language)}for(var u=0;u<o.length;u+=1){var f=o[u];if(a.call(this,f,e,t,i,r),f.advanceWidth&&(e+=f.advanceWidth*s),r.kerning&&u<o.length-1){var h=l?this.position.getKerningValue(l,f.index,o[u+1].index):this.getKerningValue(f,o[u+1]);e+=h*s}r.letterSpacing?e+=r.letterSpacing*i:r.tracking&&(e+=r.tracking/1e3*i)}return e};rt.prototype.getPath=function(n,e,t,i,r){var a=new mt;return this.forEachGlyph(n,e,t,i,r,function(s,o,l,c){var u=s.getPath(o,l,c,r,this);a.extend(u)}),a};rt.prototype.getPaths=function(n,e,t,i,r){var a=[];return this.forEachGlyph(n,e,t,i,r,function(s,o,l,c){var u=s.getPath(o,l,c,r,this);a.push(u)}),a};rt.prototype.getAdvanceWidth=function(n,e,t){return this.forEachGlyph(n,0,0,e,t,function(){})};rt.prototype.draw=function(n,e,t,i,r,a){this.getPath(e,t,i,r,a).draw(n)};rt.prototype.drawPoints=function(n,e,t,i,r,a){this.forEachGlyph(e,t,i,r,a,function(s,o,l,c){s.drawPoints(n,o,l,c)})};rt.prototype.drawMetrics=function(n,e,t,i,r,a){this.forEachGlyph(e,t,i,r,a,function(s,o,l,c){s.drawMetrics(n,o,l,c)})};rt.prototype.getEnglishName=function(n){var e=this.names[n];if(e)return e.en};rt.prototype.validate=function(){var n=this;function e(i,r){}function t(i){var r=n.getEnglishName(i);r&&r.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};rt.prototype.toTables=function(){return J_.fontToTable(this)};rt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};rt.prototype.toArrayBuffer=function(){for(var n=this.toTables(),e=n.encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t),r=0;r<e.length;r++)i[r]=e[r];return t};rt.prototype.download=function(n){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");n=n||e.replace(/\s/g,"")+"-"+t+".otf";var i=this.toArrayBuffer();if(window.URL=window.URL||window.webkitURL,window.URL){var r=new DataView(i),a=new Blob([r],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(a),s.download=n;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),s.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.")};rt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};rt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};rt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function Jh(n,e){var t=JSON.stringify(n),i=256;for(var r in e){var a=parseInt(r);if(!(!a||a<256)){if(JSON.stringify(e[r])===t)return a;i<=a&&(i=a+1)}}return e[i]=n,i}function lM(n,e,t){var i=Jh(e.name,t);return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:i}]}function cM(n,e,t){var i={},r=new Ae.Parser(n,e);return i.tag=r.parseTag(),i.minValue=r.parseFixed(),i.defaultValue=r.parseFixed(),i.maxValue=r.parseFixed(),r.skip("uShort",1),i.name=t[r.parseUShort()]||{},i}function uM(n,e,t,i){for(var r=Jh(e.name,i),a=[{name:"nameID_"+n,type:"USHORT",value:r},{name:"flags_"+n,type:"USHORT",value:0}],s=0;s<t.length;++s){var o=t[s].tag;a.push({name:"axis_"+n+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return a}function hM(n,e,t,i){var r={},a=new Ae.Parser(n,e);r.name=i[a.parseUShort()]||{},a.skip("uShort",1),r.coordinates={};for(var s=0;s<t.length;++s)r.coordinates[t[s].tag]=a.parseFixed();return r}function fM(n,e){var t=new ye.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(var i=0;i<n.axes.length;i++)t.fields=t.fields.concat(lM(i,n.axes[i],e));for(var r=0;r<n.instances.length;r++)t.fields=t.fields.concat(uM(r,n.instances[r],n.axes,e));return t}function dM(n,e,t){var i=new Ae.Parser(n,e),r=i.parseULong();Pe.argument(r===65536,"Unsupported fvar table version.");var a=i.parseOffset16();i.skip("uShort",1);for(var s=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),u=[],f=0;f<s;f++)u.push(cM(n,e+a+f*o,t));for(var h=[],d=e+a+s*o,g=0;g<l;g++)h.push(hM(n,d+g*c,u,t));return{axes:u,instances:h}}var pM={make:fM,parse:dM},mM=function(){return{coverage:this.parsePointer(O.coverage),attachPoints:this.parseList(O.pointer(O.uShortList))}},gM=function(){var n=this.parseUShort();if(Pe.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},vM=function(){return this.parseList(O.pointer(gM))},xM=function(){return{coverage:this.parsePointer(O.coverage),ligGlyphs:this.parseList(O.pointer(vM))}},_M=function(){return this.parseUShort(),this.parseList(O.pointer(O.coverage))};function yM(n,e){e=e||0;var t=new O(n,e),i=t.parseVersion(1);Pe.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var r={version:i,classDef:t.parsePointer(O.classDef),attachList:t.parsePointer(mM),ligCaretList:t.parsePointer(xM),markAttachClassDef:t.parsePointer(O.classDef)};return i>=1.2&&(r.markGlyphSets=t.parsePointer(_M)),r}var SM={parse:yM},rn=new Array(10);rn[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(O.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(O.coverage),values:this.parseValueRecordList()};Pe.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};rn[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();Pe.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var i=this.parsePointer(O.coverage),r=this.parseUShort(),a=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:a,pairSets:this.parseList(O.pointer(O.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(a)}})))};if(t===2){var s=this.parsePointer(O.classDef),o=this.parsePointer(O.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:a,classDef1:s,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,O.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(a)}}))}}};rn[3]=function(){return{error:"GPOS Lookup 3 not supported"}};rn[4]=function(){return{error:"GPOS Lookup 4 not supported"}};rn[5]=function(){return{error:"GPOS Lookup 5 not supported"}};rn[6]=function(){return{error:"GPOS Lookup 6 not supported"}};rn[7]=function(){return{error:"GPOS Lookup 7 not supported"}};rn[8]=function(){return{error:"GPOS Lookup 8 not supported"}};rn[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function MM(n,e){e=e||0;var t=new O(n,e),i=t.parseVersion(1);return Pe.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(rn)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(rn),variations:t.parseFeatureVariationsList()}}var bM=new Array(10);function EM(n){return new ye.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ye.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new ye.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new ye.LookupList(n.lookups,bM)}])}var TM={parse:MM,make:EM};function AM(n){var e={};n.skip("uShort");var t=n.parseUShort();Pe.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);var i=n.parseUShort();n.skip("uShort",3);for(var r=0;r<i;r+=1){var a=n.parseUShort(),s=n.parseUShort(),o=n.parseShort();e[a+","+s]=o}return e}function wM(n){var e={};n.skip("uShort");var t=n.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");var i=n.parseUShort(),r=i&255;if(n.skip("uShort"),r===0){var a=n.parseUShort();n.skip("uShort",3);for(var s=0;s<a;s+=1){var o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function CM(n,e){var t=new Ae.Parser(n,e),i=t.parseUShort();if(i===0)return AM(t);if(i===1)return wM(t);throw new Error("Unsupported kern table version ("+i+").")}var RM={parse:CM};function LM(n,e,t,i){for(var r=new Ae.Parser(n,e),a=i?r.parseUShort:r.parseULong,s=[],o=0;o<t+1;o+=1){var l=a.call(r);i&&(l*=2),s.push(l)}return s}var PM={parse:LM};function UM(n,e){var t=new XMLHttpRequest;t.open("get",n,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?e(null,t.response):e("Font could not be loaded: "+t.statusText)},t.onerror=function(){e("Font could not be loaded")},t.send()}function xu(n,e){for(var t=[],i=12,r=0;r<e;r+=1){var a=Ae.getTag(n,i),s=Ae.getULong(n,i+4),o=Ae.getULong(n,i+8),l=Ae.getULong(n,i+12);t.push({tag:a,checksum:s,offset:o,length:l,compression:!1}),i+=16}return t}function DM(n,e){for(var t=[],i=44,r=0;r<e;r+=1){var a=Ae.getTag(n,i),s=Ae.getULong(n,i+4),o=Ae.getULong(n,i+8),l=Ae.getULong(n,i+12),c=void 0;o<l?c="WOFF":c=!1,t.push({tag:a,offset:s,compression:c,compressedLength:o,length:l}),i+=20}return t}function ot(n,e){if(e.compression==="WOFF"){var t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(bx(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var r=new DataView(i.buffer,0);return{data:r,offset:0}}else return{data:n,offset:e.offset}}function $h(n,e){e=e??{};var t,i,r=new rt({empty:!0}),a=new DataView(n,0),s,o=[],l=Ae.getTag(a,0);if(l==="\0\0\0"||l==="true"||l==="typ1")r.outlinesFormat="truetype",s=Ae.getUShort(a,4),o=xu(a,s);else if(l==="OTTO")r.outlinesFormat="cff",s=Ae.getUShort(a,4),o=xu(a,s);else if(l==="wOFF"){var c=Ae.getTag(a,4);if(c==="\0\0\0")r.outlinesFormat="truetype";else if(c==="OTTO")r.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);s=Ae.getUShort(a,12),o=DM(a,s)}else throw new Error("Unsupported OpenType signature "+l);for(var u,f,h,d,g,v,m,p,b,x,M,P,w=0;w<s;w+=1){var T=o[w],C=void 0;switch(T.tag){case"cmap":C=ot(a,T),r.tables.cmap=hh.parse(C.data,C.offset),r.encoding=new dh(r.tables.cmap);break;case"cvt ":C=ot(a,T),P=new Ae.Parser(C.data,C.offset),r.tables.cvt=P.parseShortList(T.length/2);break;case"fvar":f=T;break;case"fpgm":C=ot(a,T),P=new Ae.Parser(C.data,C.offset),r.tables.fpgm=P.parseByteList(T.length);break;case"head":C=ot(a,T),r.tables.head=bh.parse(C.data,C.offset),r.unitsPerEm=r.tables.head.unitsPerEm,t=r.tables.head.indexToLocFormat;break;case"hhea":C=ot(a,T),r.tables.hhea=Eh.parse(C.data,C.offset),r.ascender=r.tables.hhea.ascender,r.descender=r.tables.hhea.descender,r.numberOfHMetrics=r.tables.hhea.numberOfHMetrics;break;case"hmtx":m=T;break;case"ltag":C=ot(a,T),i=Ah.parse(C.data,C.offset);break;case"COLR":C=ot(a,T),r.tables.colr=Oh.parse(C.data,C.offset);break;case"CPAL":C=ot(a,T),r.tables.cpal=Nh.parse(C.data,C.offset);break;case"maxp":C=ot(a,T),r.tables.maxp=wh.parse(C.data,C.offset),r.numGlyphs=r.tables.maxp.numGlyphs;break;case"name":x=T;break;case"OS/2":C=ot(a,T),r.tables.os2=bo.parse(C.data,C.offset);break;case"post":C=ot(a,T),r.tables.post=Dh.parse(C.data,C.offset),r.glyphNames=new zo(r.tables.post);break;case"prep":C=ot(a,T),P=new Ae.Parser(C.data,C.offset),r.tables.prep=P.parseByteList(T.length);break;case"glyf":h=T;break;case"loca":b=T;break;case"CFF ":u=T;break;case"kern":p=T;break;case"GDEF":d=T;break;case"GPOS":g=T;break;case"GSUB":v=T;break;case"meta":M=T;break}}var E=ot(a,x);if(r.tables.name=Uh.parse(E.data,E.offset,i),r.names=r.tables.name,h&&b){var y=t===0,R=ot(a,b),X=PM.parse(R.data,R.offset,r.numGlyphs,y),N=ot(a,h);r.glyphs=Hh.parse(N.data,N.offset,X,r,e)}else if(u){var V=ot(a,u);Mh.parse(V.data,V.offset,r,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var W=ot(a,m);if(Th.parse(r,W.data,W.offset,r.numberOfHMetrics,r.numGlyphs,r.glyphs,e),Wx(r,e),p){var z=ot(a,p);r.kerningPairs=RM.parse(z.data,z.offset)}else r.kerningPairs={};if(d){var q=ot(a,d);r.tables.gdef=SM.parse(q.data,q.offset)}if(g){var H=ot(a,g);r.tables.gpos=TM.parse(H.data,H.offset),r.position.init()}if(v){var se=ot(a,v);r.tables.gsub=Fh.parse(se.data,se.offset)}if(f){var fe=ot(a,f);r.tables.fvar=pM.parse(fe.data,fe.offset,r.names)}if(M){var ie=ot(a,M);r.tables.meta=Ih.parse(ie.data,ie.offset),r.metas=r.tables.meta}return r}function FM(n,e,t){return t=t??{},new Promise(function(i,r){UM(n,function(a,s){if(a){if(e)return e(a);r(a)}var o;try{o=$h(s,t)}catch(l){if(e)return e(l,null);r(l)}if(e)return e(null,o);i(o)})})}var IM=Object.freeze({__proto__:null,Font:rt,Glyph:kt,Path:mt,BoundingBox:Rn,_parse:Ae,parse:$h,load:FM});class OM extends Fr{constructor(e){super(e),this.reversed=!1}load(e,t,i,r){const a=this,s=new ix(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{t(a.parse(o))}catch(l){r?r(l):console.error(l),a.manager.itemError(e)}},i,r)}parse(e){function t(r,a){const s=Math.round,o={},l=1e5/((r.unitsPerEm||2048)*72),c=r.encoding.cmap.glyphIndexMap,u=Object.keys(c);for(let f=0;f<u.length;f++){const h=u[f],d=r.glyphs.glyphs[c[h]];if(h!==void 0){const g={ha:s(d.advanceWidth*l),x_min:s(d.xMin*l),x_max:s(d.xMax*l),o:""};a&&(d.path.commands=i(d.path.commands)),d.path.commands.forEach(function(v){v.type.toLowerCase()==="c"&&(v.type="b"),g.o+=v.type.toLowerCase()+" ",v.x!==void 0&&v.y!==void 0&&(g.o+=s(v.x*l)+" "+s(v.y*l)+" "),v.x1!==void 0&&v.y1!==void 0&&(g.o+=s(v.x1*l)+" "+s(v.y1*l)+" "),v.x2!==void 0&&v.y2!==void 0&&(g.o+=s(v.x2*l)+" "+s(v.y2*l)+" ")}),o[String.fromCodePoint(d.unicode)]=g}}return{glyphs:o,familyName:r.getEnglishName("fullName"),ascender:s(r.ascender*l),descender:s(r.descender*l),underlinePosition:r.tables.post.underlinePosition,underlineThickness:r.tables.post.underlineThickness,boundingBox:{xMin:r.tables.head.xMin,xMax:r.tables.head.xMax,yMin:r.tables.head.yMin,yMax:r.tables.head.yMax},resolution:1e3,original_font_information:r.tables.name}}function i(r){const a=[];let s;r.forEach(function(l){l.type.toLowerCase()==="m"?(s=[l],a.push(s)):l.type.toLowerCase()!=="z"&&s.push(l)});const o=[];return a.forEach(function(l){const c={type:"m",x:l[l.length-1].x,y:l[l.length-1].y};o.push(c);for(let u=l.length-1;u>0;u--){const f=l[u],h={type:f.type};f.x2!==void 0&&f.y2!==void 0?(h.x1=f.x2,h.y1=f.y2,h.x2=f.x1,h.y2=f.y1):f.x1!==void 0&&f.y1!==void 0&&(h.x1=f.x1,h.y1=f.y1),h.x=l[u-1].x,h.y=l[u-1].y,o.push(h)}}),o}return t(IM.parse(e),this.reversed)}}class _u extends Oo{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}var $s=.001,js={home:{primary:3629223,secondary:16777215,navcolor:16777215},about:{primary:8750469,secondary:15132160,navcolor:15132160},projects:{primary:2697513,secondary:16776960,navcolor:8750469},contact:{primary:11184878,secondary:16770227,navcolor:16770227}},Wt=HM();vr(Wt);var Gr=kM(),Yt=Gr[0],Ra=Gr[1],NM=Gr[2],To=Gr[3],Gi=Gr[4],mr=new de,Qs=new ux,Mr=null,St=null,Bn=null;zM();BM();var eo=0;xr();function kM(){var n=new y0;n.background=null;var e=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,0,0);var t=new OM,i=new _0({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),i.setAnimationLoop(VM),document.querySelector("#content").appendChild(i.domElement);var r=new ax,a=new cx(16777215,5);return new hx(a,50),a.position.set(-5,10,8),a.lookAt(0,0,-8),n.add(a),[n,e,t,i,r]}function vr(n){Wt=n;var e=document.querySelector("body");e.style.backgroundColor=to(js[Wt].primary);var t=null;Wt=="contact"&&(t="linear-gradient(#aaaaee 0%, #aaaaee 40%, #ff8566 50%, #ffe4b3 80%)",e.style.backgroundColor=null),e.style.backgroundImage=t;var i=document.getElementById("logo");i.style.fill=to(js[Wt].navcolor);var r=document.querySelectorAll(".nav-link");r.forEach(a=>{a.style.color=to(js[Wt].navcolor)})}async function xr(){if(Wt=="home")Yt.add(Mr),St&&!St.showing&&(Yt.add(St),St.showing=!0);else if(Wt=="about"){if(!document.getElementById("about-box")){var n=document.createElement("div");n.id="about-box";var e=document.createElement("div");e.id="inner-about";var t=document.createElement("img");t.src="assets/masked.png",t.id="mask-image";var i=document.createElement("div");i.id="about-me";var r=document.createElement("h1");r.textContent="About Me";var a=document.createElement("p");a.textContent="Hello! My name is Ethan Cheung and welcome to my portfolio. Firstly, let me introduce myself as a Software Developer. I have experience building industry leading software in Cloud Infrastructure, MLOps, Cybersecurity & Privacy, Data Science, and AI & Machine Learning. Most recently, I am working as a Platform Engineer at Agility Robotics.";var s=document.createElement("p");s.textContent=`Now for the interesting part. You're probably wondering "What's up with the clouds?". Well that's simple, my Chinese name means Smiling Cloud. As you continue to explore my portfolio, I want to share an experience that represents myself and to share a mix of my passions. I'm excited about creating impactful software and like to make it fun along the way. On my freetime you'll catch me keeping up with the latest in AR/VR & Graphics technology, taking pictures, running with my Husky or practicing my juggling skills with the Diabolo. I'm excited to be sharing an experience through my portfolio showcasing my passion and creativity for building software.`;var o=document.createElement("p");o.textContent="Ethan Cheung";var l=document.createElement("p");l.textContent="P.S. Press the logo to spawn some more clouds",i.appendChild(r),i.appendChild(a),i.appendChild(s),i.appendChild(o),i.appendChild(l),e.appendChild(t),e.appendChild(i),n.appendChild(e),document.getElementById("nav").appendChild(n)}}else if(Wt=="projects")console.log("test");else if(Wt=="contact"){var c=document.createElement("div");c.id="contact-box";var u=document.createElement("form");c.appendChild(u);var f=document.createElement("h2");f.textContent="Send Me A Message";var h=document.createElement("input");h.type="text",h.placeholder="Name*",h.required=!0;var d=document.createElement("input");d.type="text",d.placeholder="Email*",d.required=!0;var g=document.createElement("textarea");g.placeholder="Your Message*",g.rows=6,g.required=!0;var v=document.createElement("div");v.id="send";var m=document.createElement("button");m.id="send-button",m.type="submit",m.textContent="Send",v.appendChild(m),u.appendChild(f),u.appendChild(h),u.appendChild(d),u.appendChild(g),u.appendChild(v),document.getElementById("nav").appendChild(c)}}async function BM(){var n=new rr(1,1,1),e=zn({map:zi(Gi,"assets/bean.png")},ui),t=zn({map:zi(Gi,"assets/doja.png")},ui),i=zn({map:zi(Gi,"assets/headshot.png")},ui),r=zn({map:zi(Gi,"assets/me.png")},ui),a=zn({map:zi(Gi,"assets/masked.png")},ui),s=zn({map:zi(Gi,"assets/art.png")},ui),o=[e,t,i,r,a,s];NM.load("node_modules/three/examples/fonts/ttf/kenpixel.ttf",l=>{var c=new dx(l),u=new _u("HI,",{size:1,height:1,depth:.1,font:c,bevelSize:1,bevelThickness:1}),f=new _u("IM ETHAN",{size:1,height:1,depth:.1,font:c,bevelSize:1,bevelThickness:1});u.translate(0,0,0),f.translate(0,-1.5,0);var h=nh([u,f]),d=zn({color:16777215,transparent:!0,opacity:.75},Q0),g=new qt(h,d);g.geoType="text",g.position.set(-8.5,0,-6),St=g,St.showing=!1}),Mr=new qt(n,o),Mr.geoType="cube",Mr.position.set(1.5,0,-2),console.log("cube created")}function br(n,e){return Math.random()*(e-n)+n}function zi(n,e){var t=n.load(e);return t.colorSpace=$t,t}function zn(n,e){return new e(n)}function to(n){if(n===0)return"#000000";var e=n.toString(16);return e.slice(2),"#"+e}function GM(){var n=new di(.5,30,30);n.translate(0,0,-.4);var e=new di(.5,30,30);e.translate(0,0,.4);var t=new di(.5,32,32);t.translate(0,.5,0);var i=new di(.5,32,32);i.translate(-.4,0,0);var r=new di(.5,32,32);r.translate(.4,0,0);var a=nh([n,e,t,i,r]);n.dispose(),e.dispose(),t.dispose(),i.dispose(),r.dispose();var s=br(8,15),o=br(-3,3),l=br(-10,-2),c={color:16777215,transparent:!0,opacity:.75};Wt=="about"&&(c.color=7368816);var u=zn(c,ui),f=new qt(a,u);return f.position.set(s,o,l),f.geoType="cloud",f}function jh(){var n=GM();n.speed=.01*br(1,5),n.move=!0,Yt.add(n)}function Qh(n){n.geometry.dispose(),n.material.dispose(),Yt.remove(n)}async function Ea(){St&&(Yt.remove(St),St.showing=!1),Yt.remove(Mr);var n=document.getElementById("about-box");n&&n.remove();var e=document.getElementById("contact-box");e&&e.remove();var t=Yt.getObjectsByProperty("geoType","cloud");t.forEach(i=>{Qh(i)})}async function zM(){window.addEventListener("resize",function(){Ra.aspect=window.innerWidth/window.innerHeight,Ra.updateProjectionMatrix(),To.setSize(window.innerWidth,window.innerHeight),To.setPixelRatio(Math.min(window.devicePixelRatio,2))}),document.addEventListener("mousemove",n=>{if(mr.x=n.clientX/window.innerWidth*2-1,mr.y=-(n.clientY/window.innerHeight)*2+1,Qs.setFromCamera(mr,Ra),Bn){var e=new F,t=new Hn(new F(0,0,1),-Bn.position.z);Qs.ray.intersectPlane(t,e),Bn.position.set(e.x,e.y,e.z)}}),document.addEventListener("mousedown",n=>{if(mr.x=n.clientX/window.innerWidth*2-1,mr.y=-(n.clientY/window.innerHeight)*2+1,Bn==null)for(var e=Qs.intersectObjects(Yt.children),t=null,i=0;t==null&&i<e.length;){if(e[i].object.geoType=="cloud"){t=e[i].object,t.material.opacity=1,t.move=!1,Bn=t;break}i+=1}}),document.addEventListener("mouseup",n=>{if(Bn){var e=Bn;Bn=null,e.material.opacity=.75,e.move=!0}}),document.addEventListener("DOMContentLoaded",()=>{var n=document.getElementById("logo");n.addEventListener("mousedown",()=>{jh()});var e=document.getElementById("home");e.addEventListener("mousedown",()=>{vr("home"),Ea(),console.log("changing theme to home"),xr()});var t=document.getElementById("about");t.addEventListener("mousedown",()=>{vr("about"),Ea(),xr()});var i=document.getElementById("projects");i.addEventListener("mousedown",()=>{vr("projects"),Ea(),xr()});var r=document.getElementById("contact");r.addEventListener("mousedown",()=>{vr("contact"),Ea(),xr()})})}function HM(){let n=window.location.hash;return n?n.substring(1).toLowerCase():"home"}function VM(){eo<=0&&(eo=br(150,275),jh(),console.log("spawned cloud")),eo-=1,St&&St.showing&&(St.position.z+=$s,St.position.z<=-6.05&&($s=.001),St.position.z>=-5.95&&($s=-.001));var n=Yt.getObjectsByProperty("geoType","cube");n.forEach(i=>{i.rotation.x+=.01,i.rotation.y+=.01}),Wt=="home"&&St&&!St.showing&&(Yt.add(St),St.showing=!0);var e=Yt.getObjectsByProperty("geoType","cloud");for(let i=0;i<e.length;i++){var t=e[i];t.move&&(t.position.x-=t.speed),t.position.x<=-30&&Qh(t)}To.render(Yt,Ra)}});export default WM();
