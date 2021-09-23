import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState } from "react";
import { SERVER_ENDPOINTS } from "../config";

interface URLShortnerFormProps {}

const URLShortnerForm: React.FC<URLShortnerFormProps> = () => {
  const [url, setUrl] = useState();
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, { url })
      .then((res) => res.data);

    console.log(result);
  };

  return (
    <Box>
      <form onSubmit={submitHandler}>
        <Input
          onChange={(event: any) => setUrl(event.target.value)}
          placeholder='Enter URL'
        />
        <Button type='submit'>Create URL</Button>
      </form>
    </Box>
  );
};

export default URLShortnerForm;
