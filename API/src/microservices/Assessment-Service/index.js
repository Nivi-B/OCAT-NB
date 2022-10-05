const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  try {
  //   {
  //     "score": 3,
  //     "risk_level": "Medium Risk",
  //     "created_at": "2022-09-23T13:34:50.193Z",
  //     "data": {
  //         "altercations_with_cats": "1",
  //         "altercations_with_owner": "0",
  //         "cat_name": " sdfsf",
  //         "cat_date_of_birth": "2022-09-29",
  //         "hisses_at_strangers": "1",
  //         "plays_with_dogs": "0",
  //         "previous_contact": "1",
  //         "instrument": "dd"
  //     }
  // }

    Assessments.forge({
      created_at: assessment.created_at,
      cat_name: assessment.data.cat_name,
      cat_date_of_birth: assessment.data.cat_date_of_birth,
      score: assessment.score,
      risk_level: assessment.risk_level,
    })
      .save()
  }
  catch (err) {
    throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
  }

  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
