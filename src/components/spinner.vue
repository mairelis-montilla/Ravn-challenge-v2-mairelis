<template>
  <section class="spinner">
    <div id="floatingBarsG">
	<div class="blockG" id="rotateG_01"></div>
	<div class="blockG" id="rotateG_02"></div>
	<div class="blockG" id="rotateG_03"></div>
	<div class="blockG" id="rotateG_04"></div>
	<div class="blockG" id="rotateG_05"></div>
	<div class="blockG" id="rotateG_06"></div>
	<div class="blockG" id="rotateG_07"></div>
	<div class="blockG" id="rotateG_08"></div>
</div>
<h2 class="low-emphasis">Loading</h2>
  </section>
</template>

<script>
export default {
  name:'Spinner'
}
</script>

<style scoped>
.spinner{
	display:flex;
	justify-content:flex-start;
	margin: 1px 100px;
}
.low-emphasis{
	color:#828282;
	font-size:17px;
	font-weight: 700;
	margin:18px 5px;

}
#floatingBarsG{
	position:relative;
	width:26px;
	height:33px;
	margin:10px;
}
.blockG{
	position:absolute;
	background-color:rgb(255,255,255);
	width:4px;
	height:10px;
	border-radius:3px 3px 0 0;
		-o-border-radius:3px 3px 0 0;
		-ms-border-radius:3px 3px 0 0;
		-webkit-border-radius:3px 3px 0 0;
		-moz-border-radius:3px 3px 0 0;
	transform:scale(0.4);
		-o-transform:scale(0.4);
		-ms-transform:scale(0.4);
		-webkit-transform:scale(0.4);
		-moz-transform:scale(0.4);
	animation-name:fadeG;
		-o-animation-name:fadeG;
		-ms-animation-name:fadeG;
		-webkit-animation-name:fadeG;
		-moz-animation-name:fadeG;
	animation-duration:0.782s;
		-o-animation-duration:0.782s;
		-ms-animation-duration:0.782s;
		-webkit-animation-duration:0.782s;
		-moz-animation-duration:0.782s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}
#rotateG_01{
	left:0;
	top:12px;
	animation-delay:0.2895s;
		-o-animation-delay:0.2895s;
		-ms-animation-delay:0.2895s;
		-webkit-animation-delay:0.2895s;
		-moz-animation-delay:0.2895s;
	transform:rotate(-90deg);
		-o-transform:rotate(-90deg);
		-ms-transform:rotate(-90deg);
		-webkit-transform:rotate(-90deg);
		-moz-transform:rotate(-90deg);
}
#rotateG_02{
	left:3px;
	top:4px;
	animation-delay:0.386s;
		-o-animation-delay:0.386s;
		-ms-animation-delay:0.386s;
		-webkit-animation-delay:0.386s;
		-moz-animation-delay:0.386s;
	transform:rotate(-45deg);
		-o-transform:rotate(-45deg);
		-ms-transform:rotate(-45deg);
		-webkit-transform:rotate(-45deg);
		-moz-transform:rotate(-45deg);
}
#rotateG_03{
	left:11px;
	top:1px;
	animation-delay:0.4825s;
		-o-animation-delay:0.4825s;
		-ms-animation-delay:0.4825s;
		-webkit-animation-delay:0.4825s;
		-moz-animation-delay:0.4825s;
	transform:rotate(0deg);
		-o-transform:rotate(0deg);
		-ms-transform:rotate(0deg);
		-webkit-transform:rotate(0deg);
		-moz-transform:rotate(0deg);
}
#rotateG_04{
	right:3px;
	top:4px;
	animation-delay:0.589s;
		-o-animation-delay:0.589s;
		-ms-animation-delay:0.589s;
		-webkit-animation-delay:0.589s;
		-moz-animation-delay:0.589s;
	transform:rotate(45deg);
		-o-transform:rotate(45deg);
		-ms-transform:rotate(45deg);
		-webkit-transform:rotate(45deg);
		-moz-transform:rotate(45deg);
}
#rotateG_05{
	right:0;
	top:12px;
	animation-delay:0.6855s;
		-o-animation-delay:0.6855s;
		-ms-animation-delay:0.6855s;
		-webkit-animation-delay:0.6855s;
		-moz-animation-delay:0.6855s;
	transform:rotate(90deg);
		-o-transform:rotate(90deg);
		-ms-transform:rotate(90deg);
		-webkit-transform:rotate(90deg);
		-moz-transform:rotate(90deg);
}
#rotateG_06{
	right:3px;
	bottom:3px;
	animation-delay:0.782s;
		-o-animation-delay:0.782s;
		-ms-animation-delay:0.782s;
		-webkit-animation-delay:0.782s;
		-moz-animation-delay:0.782s;
	transform:rotate(135deg);
		-o-transform:rotate(135deg);
		-ms-transform:rotate(135deg);
		-webkit-transform:rotate(135deg);
		-moz-transform:rotate(135deg);
}
#rotateG_07{
	bottom:0;
	left:11px;
	animation-delay:0.8785s;
		-o-animation-delay:0.8785s;
		-ms-animation-delay:0.8785s;
		-webkit-animation-delay:0.8785s;
		-moz-animation-delay:0.8785s;
	transform:rotate(180deg);
		-o-transform:rotate(180deg);
		-ms-transform:rotate(180deg);
		-webkit-transform:rotate(180deg);
		-moz-transform:rotate(180deg);
}
#rotateG_08{
	left:3px;
	bottom:3px;
	animation-delay:0.975s;
		-o-animation-delay:0.975s;
		-ms-animation-delay:0.975s;
		-webkit-animation-delay:0.975s;
		-moz-animation-delay:0.975s;
	transform:rotate(-135deg);
		-o-transform:rotate(-135deg);
		-ms-transform:rotate(-135deg);
		-webkit-transform:rotate(-135deg);
		-moz-transform:rotate(-135deg);
}
@keyframes fadeG{
	0%{
		background-color:rgb(130,130,130);
	}
	100%{
		background-color:rgb(255,255,255);
	}
}
@-o-keyframes fadeG{
	0%{
		background-color:rgb(130,130,130);
	}
	100%{
		background-color:rgb(255,255,255);
	}
}
@-ms-keyframes fadeG{
	0%{
		background-color:rgb(130,130,130);
	}
	100%{
		background-color:rgb(255,255,255);
	}
}
@-webkit-keyframes fadeG{
	0%{
		background-color:rgb(130,130,130);
	}
	100%{
		background-color:rgb(255,255,255);
	}
}
@-moz-keyframes fadeG{
	0%{
		background-color:rgb(130,130,130);
	}
	100%{
		background-color:rgb(255,255,255);
	}
}
</style>