var Xapiactions = [];
var Xapistats = [];

//This function is automatically called at the end of a lesson e-learning ludiscape
function ludiscapeFinishActivity(login,activityId,title,success,duration,score_raw){
	
	if(document.getElementById("xapiUrl")){
	
		xapiUrl = $('#xapiUrl').attr('data-url');
		
		var stat = {
			"actor":{
				"objectType": "Agent",
				"mbox":"mailto:" + login
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
		Xapistats.push(stat);
		
		var jsonstring = JSON.stringify(Xapistats);
		var urlTracking = xapiUrl+'?login='+login+'&&statements='+jsonstring;
		
		document.getElementById("xapiFrame").src = urlTracking;
	
	}

}
