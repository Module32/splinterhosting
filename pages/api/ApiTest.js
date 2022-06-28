import Nodeactyl from 'nodeactyl'

export default async function ApiTest(req, res) {
    const client = new Nodeactyl.NodeactylApplication("https://panel.splinterhosting.com/", "ptla_yeiM9ho2XqhuTD18El10tqIpdHQIGL2CiKsJSaKq50P");

    console.log(client);
    return res.status(200).json({ client: client })
}