var actions = [];
var stats = [];

//This function is automatically called at the end of a lesson e-learning ludiscape
function ludiscapeFinishActivity(mail,activityId,title,success,duration){
	
	if(document.getElementById("xapiUrl")){
	
		xapiUrl = $('#xapiUrl').attr('data-url');
		
		var stat = {
			"actor":{
				"objectType": "Agent",
				"mbox":"mailto:" + mail
			}, "verb":{
				"id":"http://adlnet.gov/expapi/verbs/completed", 
				"display":{ "fr-FR":"a terminé" }
			}, "object":{
				"id" : activityId,
				"definition":{
					"name" :{ "fr-FR": title }
				}
			}, "result":{
				"score":{
					"scaled":score_scaled,
					"raw":score_raw,
					"min":0,
					"max":100
				},
				"success":success,
				"duration":duration
			}
		};
		stats.push(stat);
		
		var jsonstring = JSON.stringify(stats);
		var urlTracking = xapiUrl+'?login='+mail+'&&statements='+jsonstring;
		
		document.getElementById("xapiFrame").src = urlTracking;
	
	}

}