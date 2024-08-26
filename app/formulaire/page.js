"use client";
import Image from "next/image";

import { Select } from "antd";
import { Input } from "../components/Input";

export default function Form() {
  return (
    <div className="max-w-lg mx-auto my-5 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-gray-800">Formulaire de confirmation</h1>
       <form className="flex flex-col">
        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg ">
          <legend className="font-bold mb-2.5 text-gray-700">Informations Personnelles:</legend>
          <label htmlFor="nom" className="mb-1.5 block text-gray-800">Nom:</label>
          <Input id="nom" />

          <label htmlFor="prenom" className="mb-1.5 block text-gray-800">Prenom:</label>
          <Input id="prenom" />

          <label htmlFor="âge" className="mb-1.5 block text-gray-800">Age:</label>
          <Input id="âge" />

          <label htmlFor="date" className="mb-1.5 block text-gray-800">Date de naissance:</label>
          <input type="date"></input>

          <label className="mb-1.5 block text-gray-800">Sexe :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Homme</option>
                <option>Femme</option>
            </select>

          <label htmlFor="e_mail" className="mb-1.5 block text-gray-800">Email:</label>
          <Input id="e_mail" />

          <label htmlFor="phone" className="mb-1.5 block text-gray-800">Téléphone :</label>
          <Input id="phone" />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg ">
           <legend className="font-bold mb-2.5 text-gray-700">Réponse Oui/Non</legend>
           <label className="mb-1.5 block text-gray-800">Acceptez-vous de continuer ?</label>
           <input type="radio"value="oui" className="mr-1.25"></input>
           <label className="mb-1.5 block text-gray-800">Oui</label>
           <input type="radio"value="non" className="mr-1.25"></input>
           <label className="mb-1.5 block text-gray-800">non</label>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg">
        <legend className="font-bold mb-2.5 text-gray-700">Choisissez un Référentiel:</legend>
        <label className="mb-1.5 block text-gray-800">Référentiel :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Developpeur web</option>
                <option>Référent digital</option>
            </select>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-5 rounded-lg">
        <legend className="font-bold mb-2.5 text-gray-700">Vous postulez pour quelle Campus:</legend>
        <label className="mb-1.5 block text-gray-800">Campus :</label>
            <select>
                <option disabled selected>Veuillez choisir...</option>
                <option>Libreviile</option>
                <option>Port-gentil</option>
            </select>
        </fieldset>
        <button type="submit" className="bg-red-500 text-white border-none py-2 px-4 rounded cursor-pointer text-base hover:bg-red-600">Envoyer</button>
      </form>

    </div>
  );
}


// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   ColorPicker,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Slider,
//   Switch,
//   TreeSelect,
//   Upload,
// } from 'antd';
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
// const FormDisabledDemo = () => {
//   const [componentDisabled, setComponentDisabled] = useState(true);
//   return (
//     <>
//       <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}
//       >
//         Form disabled
//       </Checkbox>
//       <Form
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         disabled={componentDisabled}
//         style={{
//           maxWidth: 600,
//         }}
//       >
//         <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
//           <Checkbox>Checkbox</Checkbox>
//         </Form.Item>
//         <Form.Item label="Radio">
//           <Radio.Group>
//             <Radio value="apple"> Apple </Radio>
//             <Radio value="pear"> Pear </Radio>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item label="Input">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Select">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="TreeSelect">
//           <TreeSelect
//             treeData={[
//               {
//                 title: 'Light',
//                 value: 'light',
//                 children: [
//                   {
//                     title: 'Bamboo',
//                     value: 'bamboo',
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="Cascader">
//           <Cascader
//             options={[
//               {
//                 value: 'zhejiang',
//                 label: 'Zhejiang',
//                 children: [
//                   {
//                     value: 'hangzhou',
//                     label: 'Hangzhou',
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           <RangePicker />
//         </Form.Item>
//         <Form.Item label="InputNumber">
//           <InputNumber />
//         </Form.Item>
//         <Form.Item label="TextArea">
//           <TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Switch" valuePropName="checked">
//           <Switch />
//         </Form.Item>
//         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
//           <Upload action="/upload.do" listType="picture-card">
//             <button
//               style={{
//                 border: 0,
//                 background: 'none',
//               }}
//               type="button"
//             >
//               <PlusOutlined />
//               <div
//                 style={{
//                   marginTop: 8,
//                 }}
//               >
//                 Upload
//               </div>
//             </button>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//         <Form.Item label="Slider">
//           <Slider />
//         </Form.Item>
//         <Form.Item label="ColorPicker">
//           <ColorPicker />
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
// export default () => <FormDisabledDemo />;