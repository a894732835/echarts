
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script type="text/javascript" src="js/echarts/echarts.js" ></script>
 		<script type="text/javascript" src="js/echart_html.js" ></script>
		<script type="text/javascript" src="js/echartspage.js" ></script>
	
	</head>
	<body>
		<%
			if(CommonUtil.getSysUserFromSession() !=null){
		 %>
		 	<script type="text/javascript">
		 		$(function(){					
						var html="";
						html+='您好，尊敬的：'+'<%= CommonUtil.getSysUserFromSession().getShowName()%>';
						html+='<a class="newheadimg2" onclick="sysUserLogOut()"></a>';
						$("#longin-state").html(html);
						$(".kysb").click(function(){
							window.location.href='<%=basePath %>kypro/index.jsp';
						});
				});
			</script>
		 <%
		 	}else{
		 %> 
		 	<script type="text/javascript">
		 	$(function(){	
		 		$(".kysb").click(function(){
				 layui.use('layer', function(){
						  var layer = layui.layer;
						  layer.alert('请先登录', {icon: 5,area: ['200px', '170px']});//("搜索内容不能为空！");
						}); 
				})
			})
		 	</script>
		 <%
		 	}
		 %> 
		<div class="allhead">
			<div class="maincontainer">
				
			
				<div class="haedsearch">
					<input type="button" class="searchinput" value="搜索" onclick="searchBtn();"/>
					<input type="text" id="searchId" name="searchName" placeholder="请输入您感兴趣的内容"/>
					
				</div>
				<div class="clearboth"></div>
			</div>
		</div>
		<div class="nav">
			<div class="maincontainer">
				<ul class="navul">
		
				</ul>
				<div id="longin-state">
					<a id="btnTest1" class="mainlogo">登录</a>
				<!-- <a class="mainlogo" href="#">登录</a> -->
				</div>
			</div>
		</div>
		<div class="maincontainer">
			<div class="haedimg">
		
				<p class="headfonttop">科技成果对接</p>
				<p class="headfontbottom">与未来零距离</p>
			</div>
			<div class="maincontentdiv dirleft">
				<div class="maindivtitle"><span>科技人才分析</span></div>
				
				<div class="u-tab tab-ver-left">
					<div class="tab-ul">
						<ul class="u-tabnav">
							<li class="active" style="margin-top: 0;">年龄</li>
							<!-- <li>学历</li> -->
							<li>职称</li>
						</ul>
					</div>
					<div class="u-tabmain">
						<div class="active">
							<!-- <img src="img/echars3.png" /> -->
							<div id="ageDiv" class="echarts500"></div>
						</div>
						<!-- <div>
							<div id="educationDiv" class="echarts500"></div>
						</div> -->
						<div>
							<div id="titleDiv" class="echarts500"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="maincontentdiv dirright">
				<div class="maindivtitle"><span>科研单位分析</span></div>
				<div class="u-tab tab-ver-left">
					<div class="tab-ul">
						<ul class="u-tabnav">
							<li class="active" style="margin-top: 0;">单位</li>
							<li>年份</li>
						</ul>
					</div>
					<div class="u-tabmain">
						<div class="active">
							<!-- <img src="img/echars2.png" /> -->
							<div id="companyDiv" class="echarts500"></div>
						</div>
						<div>
							<div id="yearDiv" class="echarts500"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="clearboth"></div>
			<div class="maincontentdiv dirleft">
				<div class="maindivtitle"><span>科技成果库分析</span></div>
				<div class="u-tab tab-ver-left">
					<div class="tab-ul">
						<ul class="u-tabnav">
							<li class="active" style="margin-top: 0;">技术领域</li>
							<li>知识产权</li>
							<li>所处阶段</li>
						</ul>
					</div>
					<div class="u-tabmain">
						<div class="active">
							<!-- <img src="img/echars1.png" /> -->
							<div id="technologyDiv" class="echarts500"></div>
						</div>
						<div>
							<div id="knowledgeDiv" class="echarts500"></div>
						</div>
						<div>
							<div id="stageDiv" class="echarts500"></div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="maincontentdiv dirright">
				<div class="maindivtitle"><span>应用技术分析</span></div>
				<div class="u-tab tab-ver-left">
					<div class="tab-ul">
						<ul class="u-tabnav">
							<li class="active" style="margin-top: 0;">课题来源</li>
							<li>技术水平</li>
						</ul>
					</div>
					<div class="u-tabmain">
						<div class="active">
							<!-- <img src="img/echars4.png" /> -->
							<div id="sourceDiv" class="echarts500"></div>
						</div>
						<div>
							<div id="levelDiv" class="echarts500"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="clearboth"></div>
		</div>
		<div class="mainfooter">
			<p style="margin-top: 25px;"></p>
			<p></p>
		</div>
		<div id="div2" class="dialog">
	       <div class="text-center">
	            <div class="form">
	        	    <div class="message1" id="msgBox"></div>
					<input type="text" id="username" placeholder="用户名" class="login_txt" /><br />
					<input type="password" id="password" placeholder="密码"
						class="login_txt pass_txt" /><br />
					<input type="button" value="登录" id="login" class="login_btn" />
				</div>
	       </div>
    	</div>
		<script type="text/javascript"> 
		var basePath = '<%=basePath%>';
        // 路径配置  
          
    </script>  
	</body>
</html>
