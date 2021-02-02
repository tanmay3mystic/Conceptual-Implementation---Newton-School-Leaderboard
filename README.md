# Conceptual-Implementation---Newton-School-Leaderboard
# Project Description :

Leaderboards are an excellent way to test your progress and help you stay focused. Now that we know its importance, we should be able to create one ourselves. When we display scores on the leaderboard, if the data is too big, we prefer to display it in a paginated fashion. Only some limited data is shown on the first screen to not make the website overcrowded.
Let's build paginated APIs and the backend server to support them.

Details

File name data.js contains the details about top 160 coders.

Expose an endpoint on http://localhost:8080


Path /topRankings

Method: GET

Parameters:

limit (Optional, Positive integer, Default Value = 20)

offset (Optional, Positive integer, Default Value = 0)


Response data: List of top coders in the format:
Array<{ name: String, username: String, global_rank: Number, country_rank: Number, rating: String, diff: Number, country_code: String, country: String, institution: String, institution_type: String, all_rating: String, user_gender: String}>




Examples:
GET request on http://localhost:8080/topRankings?limit=5&offset=1: The server should skip the first record from data.js file and return next 5 records.

GET request on http://localhost:8080/topRankings?limit=2&offset=0 [{ "name": "Gennady Korotkevich",
"username": "gennady.korotkevich",
"global_rank": 1,
"country_rank": 1,
"rating": 3923,
"diff": 0,
"country_code": "BY",
"country": "Belarus",
"institution": "Saint Petersburg National Research University of Information Technologies, Mechanics and Optics",
"institution_type": "College",
"all_rating": "3923",
"user_gender": "Male" }, {
"name": "Mun.HakMyong",
"username": "rns4",
"global_rank": 2,
"country_rank": 1,
"rating": 3061, "diff": 0,
"country_code": "KP",
"country": "North Korea",
"institution": "Kim Il-sung University",
"institution_type": "College",
"all_rating": "3061",
"user_gender": "Male"
}]
