
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { formState: { errors }, handleSubmit, register } = useForm({
    defaultValues: {
      altercations_with_cats: ``,
      altercations_with_owner: ``,
      cat_name: ` `,
      cat_date_of_birth: ``,
      hisses_at_strangers: ``,
      plays_with_dogs: ``,
      previous_contact: ``,
    },

  });

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API

  const onSubmit = async (data) => {
    try
    {
      const num1 = parseInt(data.previous_contact);
      const num2 = parseInt(data.altercations_with_cats);
      const num3 = parseInt(data.altercations_with_owner);
      const num4 = parseInt(data.plays_with_dogs);
      const num5 = parseInt(data.hisses_at_strangers);
      let risk_level = ``;
      const created_at = new Date();

      const score = num1 + num2 + num3 + num4 + num5;
      console.log(num1);
      console.log(num2);
      console.log(num3);
      console.log(num4);
      console.log(num5);
      console.log(`score:${score}`);

      switch (score) {
        case 2:
        case 3:
          risk_level = `Medium Risk`;
          break;
        case 4:
        case 5:
          risk_level = `High Risk`;
          break;
        default:
          risk_level = `low Risk`;
      }
      console.log(risk_level);
      console.log(created_at);
      console.log(`data`, data);

      await AssessmentService.submit({ score, risk_level, created_at, data });
    }
    catch (error) {
      throw new Error(`${error.response.statusText} - ${error.response.data.message}`);
    }
  };

  console.log(errors);
  return <Form onSubmit={handleSubmit(onSubmit)}>

    <h1>Cat Assessment Info</h1>

    <h2>Instrument</h2>

    <div className="col-md-6">
      <label
        id="lbl_instrument"
        htmlFor="instrument"
      >
        Cat Behavioral Instrument:
      </label>
      <input {...register(`instrument`, { required: `Required Field` })}
        type="static text"
        name="instrument"
      />
      {errors.instrument && <p>{errors.instrument?.message}</p>}
    </div>
    <br />

    <h2>Cat Details</h2>

    <div className="col-md-6">
      <label
        id="lbl_cat_name"
        htmlFor="cat_name"
      >
        Cat Name:
      </label>
      <input {...register(`cat_name`, { required: `Required Field` })}
        type="text"
        name="cat_name"
      />
      {errors.cat_name && <p>{errors.cat_name?.message}</p>}
    </div>
    <br />

    <div className="col-md-6">
      <label
        id="lbl_cat_date_of_birth"
        htmlFor="cat_date_of_birth"
      >
        Cat Date of Birth:
      </label>
      <input {...register(`cat_date_of_birth`, { required: `Required Field` })}
        type="date"
        name="cat_date_of_birth"
      />
      {errors.cat_date_of_birth && <p>{errors.cat_date_of_birth?.message}</p>}
    </div>
    <br />

    <h2>Questions & Responses</h2>

    <div className="col-md-6">
      <label
        id="lbl_previous_contact"
        htmlFor="previous_contact"
      >
        1. Previous contact with the Cat Judicial System
      </label>
      <br />
      <p> <input {...register(`previous_contact`, { required: `Required Field` })}
        type="radio"
        value="0"
        name="previous_contact" /> No (score = 0)</p>
      <p><input {...register(`previous_contact`, { required: `Required Field` })}
        type="radio"
        value={1}
        name="previous_contact" /> Yes (score = 1)</p>
      {errors.previous_contact && <p>{errors.previous_contact?.message}</p>}
    </div>
    <br />

    <div className="col-md-6">
      <label
        id="lbl_altercations_with_cats"
        htmlFor="altercations_with_cats"
      >
        2. Physical altercations with other cats
      </label>
      <br />
      <p> <input {...register(`altercations_with_cats`, { required: `Required Field` })}
        type="radio"
        value="0"
        name="altercations_with_cats" /> 0-3 altercations (score = 0)</p>
      <p> <input {...register(`altercations_with_cats`, { required: `Required Field` })}
        type="radio"
        value="1"
        name="altercations_with_cats" /> 3+ altercations (score = 1)</p>
      {errors.altercations_with_cats && <p>{errors.altercations_with_cats?.message}</p>}
    </div>
    <br />

    <div className="col-md-6">
      <label
        id="lbl_altercations_with_owner"
        htmlFor="altercations_with_owner"
      >
        3. Physical altercations with owner (scratching, biting, etc...)
      </label>
      <br />
      <p><input {...register(`altercations_with_owner`, { required: `Required Field` })}
        type="radio"
        value="1"
        name="altercations_with_owner" /> 10+ altercations (score = 1)</p>

      <p><input {...register(`altercations_with_owner`, { required: `Required Field` })}
        type="radio"
        value="0"
        name="altercations_with_owner" />0-10 altercations (score = 0)</p>

      {errors.altercations_with_owner && <p>{errors.altercations_with_owner?.message}</p>}
    </div>
    <br />

    <div className="col-md-6">
      <label
        id="lbl_plays_with_dogs"
        htmlFor="plays_with_dogs"
      >
        4. Plays well with dogs
      </label>
      <br />
      <p> <input {...register(`plays_with_dogs`, { required: `Required Field` })}
        type="radio"
        value="1"
        name="plays_with_dogs" /> No (score = 1)</p>
      <p><input {...register(`plays_with_dogs`, { required: `Required Field` })}
        type="radio"
        value="0"
        name="plays_with_dogs" />Yes (score = 0)</p>
      {errors.plays_with_dogs && <p>{errors.plays_with_dogs?.message}</p>}
    </div>
    <br />

    <div className="col-md-6">
      <label
        id="lbl_hisses_at_strangers"
        htmlFor="hisses_at_strangers"
      >
        5.Hisses at strangers
      </label>
      <br />
      <p><input {...register(`hisses_at_strangers`, { required: `Required Field` })}
        type="radio"
        value="0"
        name="hisses_at_strangers" /> No (score = 0)</p>
      <p><input {...register(`hisses_at_strangers`, { required: `Required Field` })}
        type="radio"
        value="1"
        name="hisses_at_strangers" />Yes (score = 1)</p>
      {errors.hisses_at_strangers && <p>{errors.hisses_at_strangers?.message}</p>}
    </div>
    <br />

    <Button variant="primary" type="submit">Submit</Button>

  </Form>;
};
