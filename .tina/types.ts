// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
  JSONObject: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

export type FormField = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};




export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  section?: Maybe<Section>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  type?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  new_doc_ext?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Document>>>;
};

export type SectionDocumentUnion = Pages_Document | Authors_Document | Posts_Document;

export type SectionParams = {
  pages?: Maybe<Pages_Input>;
  authors?: Maybe<Authors_Input>;
  posts?: Maybe<Posts_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Node>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updatePagesDocument?: Maybe<Pages_Document>;
  updateAuthorsDocument?: Maybe<Authors_Document>;
  updatePostsDocument?: Maybe<Posts_Document>;
};


export type MutationAddPendingDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<SectionParams>;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Pages_Input>;
};


export type MutationUpdateAuthorsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Authors_Input>;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Posts_Input>;
};

export type Query = {
  __typename?: 'Query';
  _queryString?: Maybe<Scalars['String']>;
  node?: Maybe<Node>;
  getDocument?: Maybe<SectionDocumentUnion>;
  getSections?: Maybe<Array<Maybe<Section>>>;
  getSection?: Maybe<Section>;
  getPagesDocument?: Maybe<Pages_Document>;
  getPagesList?: Maybe<Array<Maybe<Pages_Document>>>;
  getAuthorsDocument?: Maybe<Authors_Document>;
  getAuthorsList?: Maybe<Array<Maybe<Authors_Document>>>;
  getPostsDocument?: Maybe<Posts_Document>;
  getPostsList?: Maybe<Array<Maybe<Posts_Document>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  section?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetSectionArgs = {
  section?: Maybe<Scalars['String']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetAuthorsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type Pages_Data = Page_Doc_Data;

export type Pages_Input = {
  page?: Maybe<Page_Doc_Input>;
};

export type Pages_Values = Page_Doc_Values;

export type Pages_Form = Page_Doc_Form;

export type Pages_Document = Node & Document & {
  __typename?: 'Pages_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Pages_Data>;
  values?: Maybe<Pages_Values>;
  form?: Maybe<Pages_Form>;
};

export type BlockCta_Data = {
  __typename?: 'BlockCta_Data';
  header?: Maybe<Scalars['String']>;
};

export type BlockHero_Data = {
  __typename?: 'BlockHero_Data';
  message?: Maybe<Scalars['String']>;
};

export type Page_Blocks_Data = BlockCta_Data | BlockHero_Data;

export type LongTextValue = {
  __typename?: 'LongTextValue';
  raw?: Maybe<Scalars['String']>;
  markdownAst?: Maybe<Scalars['JSONObject']>;
  html?: Maybe<Scalars['String']>;
};

export type Page_Doc_Data = {
  __typename?: 'Page_Doc_Data';
  title?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<Page_Blocks_Data>>>;
  _body?: Maybe<LongTextValue>;
};

export type BlockCta_Values = {
  __typename?: 'BlockCta_Values';
  header?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type BlockHero_Values = {
  __typename?: 'BlockHero_Values';
  message?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Page_Blocks_Values = BlockCta_Values | BlockHero_Values;

export type LongTextInitialValue = {
  __typename?: 'LongTextInitialValue';
  raw?: Maybe<Scalars['String']>;
};

export type Page_Doc_Values = {
  __typename?: 'Page_Doc_Values';
  title?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<Page_Blocks_Values>>>;
  _body?: Maybe<LongTextInitialValue>;
  _template?: Maybe<Scalars['String']>;
};

export type TextField = FormField & {
  __typename?: 'TextField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type BlockCta_FormFieldsUnion = TextField;

export type BlockCta_Form = {
  __typename?: 'BlockCta_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<BlockCta_FormFieldsUnion>>>;
};

export type BlockHero_FormFieldsUnion = TextField;

export type BlockHero_Form = {
  __typename?: 'BlockHero_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<BlockHero_FormFieldsUnion>>>;
};

export type Page_Blocks_BlocksFieldTemplates = {
  __typename?: 'Page_Blocks_BlocksFieldTemplates';
  blockCta?: Maybe<BlockCta_Form>;
  blockHero?: Maybe<BlockHero_Form>;
};

export type Page_Blocks_BlocksField = FormField & {
  __typename?: 'Page_Blocks_BlocksField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  templates?: Maybe<Page_Blocks_BlocksFieldTemplates>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Page_Doc_FormFieldsUnion = TextField | Page_Blocks_BlocksField | TextareaField;

export type Page_Doc_Form = {
  __typename?: 'Page_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Page_Doc_FormFieldsUnion>>>;
};

export type BlockCta_Input = {
  header?: Maybe<Scalars['String']>;
};

export type BlockHero_Input = {
  message?: Maybe<Scalars['String']>;
};

export type Blocks_Input = {
  blockCta?: Maybe<BlockCta_Input>;
  blockHero?: Maybe<BlockHero_Input>;
};

export type Body_LongTextInput = {
  raw?: Maybe<Scalars['String']>;
};

export type Page_Doc_Input = {
  title?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<Blocks_Input>>>;
  _body?: Maybe<Body_LongTextInput>;
};

export type Authors_Data = Author_Doc_Data;

export type Authors_Input = {
  author?: Maybe<Author_Doc_Input>;
};

export type Authors_Values = Author_Doc_Values;

export type Authors_Form = Author_Doc_Form;

export type Authors_Document = Node & Document & {
  __typename?: 'Authors_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Authors_Data>;
  values?: Maybe<Authors_Values>;
  form?: Maybe<Authors_Form>;
};

export type Author_Doc_Data = {
  __typename?: 'Author_Doc_Data';
  name?: Maybe<Scalars['String']>;
  _body?: Maybe<LongTextValue>;
};

export type Author_Doc_Values = {
  __typename?: 'Author_Doc_Values';
  name?: Maybe<Scalars['String']>;
  _body?: Maybe<LongTextInitialValue>;
  _template?: Maybe<Scalars['String']>;
};

export type Author_Doc_FormFieldsUnion = TextField | TextareaField;

export type Author_Doc_Form = {
  __typename?: 'Author_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Author_Doc_FormFieldsUnion>>>;
};

export type Author_Doc_Input = {
  name?: Maybe<Scalars['String']>;
  _body?: Maybe<Body_LongTextInput>;
};

export type Posts_Data = Post_Doc_Data;

export type Posts_Input = {
  post?: Maybe<Post_Doc_Input>;
};

export type Posts_Values = Post_Doc_Values;

export type Posts_Form = Post_Doc_Form;

export type Posts_Document = Node & Document & {
  __typename?: 'Posts_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Posts_Data>;
  values?: Maybe<Posts_Values>;
  form?: Maybe<Posts_Form>;
};

export type Post_Doc_Data = {
  __typename?: 'Post_Doc_Data';
  title?: Maybe<Scalars['String']>;
  _body?: Maybe<LongTextValue>;
};

export type Post_Doc_Values = {
  __typename?: 'Post_Doc_Values';
  title?: Maybe<Scalars['String']>;
  _body?: Maybe<LongTextInitialValue>;
  _template?: Maybe<Scalars['String']>;
};

export type Post_Doc_FormFieldsUnion = TextField | TextareaField;

export type Post_Doc_Form = {
  __typename?: 'Post_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Post_Doc_FormFieldsUnion>>>;
};

export type Post_Doc_Input = {
  title?: Maybe<Scalars['String']>;
  _body?: Maybe<Body_LongTextInput>;
};

