import {Mongo} from 'meteor/mongo';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
	'links.insert':function(url){
		check(url, Match.Where(url => validUrl.isUri(url))); //check throws an error
	
	//We're ready to save the url
	const token = Math.random().toString().slice(-5); //generate random string
	//Links.insert({url:url, token:token, clicks:0});
	Links.insert({url, token, clicks:0});
 }
});


export const Links = new Mongo.Collection('links');