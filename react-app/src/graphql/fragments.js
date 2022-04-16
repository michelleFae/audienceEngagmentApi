import { gql } from "@apollo/client";

export const UserActivityFields = gql`
  fragment UserActivityFields on UserActivity {
    activityId
    timestamp
    activity
    event {
      eventId
      name
      description
      eventType
    }
    user {
      userId
      name
      emailId
      age
    }
  }
`;
