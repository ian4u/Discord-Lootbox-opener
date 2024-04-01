const User_token = ""; // Add your token here
if (!User_token.length > 0) {
  process.exit(1);
}

async function request(url, method, token, data) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = token;
  } else {
    throw Error("Invalid token");
  }
  const options = {
    method,
    headers,
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const jsonData = await response.json();
  return {
    data: jsonData,
    code: response.status,
  };
}

const data_table = {
  "1214340999644446728": "Dreamhammer",
  "1214340999644446723": "Speedboots",
  "1214340999644446722": "Wompashell",
  "1214340999644446726": "Quack!!",
  "1214340999644446721": "Cute Plushy",
  "1214340999644446720": "Shellblade",
  "1214340999644446725": "Power Helmet",
  "1214340999644446724": "Zelda Flute",
  "1214340999644446727": "BANANA",
};

const req_on = ["https://discord.com/api/v9/users/@me/lootboxes/open", "POST"];

async function open_cycle(token) {
  const open = await request(req_on[0], req_on[1], token);
  console.log(open);
  console.log(`YOU GOT A ${data_table[open.opened_item]}`);
}

(async function () {
  await open_cycle(User_token);
})();
